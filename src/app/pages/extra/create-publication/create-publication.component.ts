import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicationService } from '../../../services/publication.service';
import { Publication } from 'src/app/models/publication';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.scss']
})
export class CreatePublicationComponent implements OnInit {
  publicationForm: FormGroup;
  selectedImage: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private publicationService: PublicationService
  ) {}

  ngOnInit(): void {
    this.initPublicationForm();
  }

  initPublicationForm(): void {
    this.publicationForm = this.formBuilder.group({
      title: ['', Validators.required],
      contentType: ['text', Validators.required], // Default to 'text'
      text: ['', Validators.required],
      status: ['public', Validators.required], // Default to 'public'
    });
  }

  onSubmit(): void {
    if (this.publicationForm.valid) {
      const formData = this.publicationForm.value;
      const publication: Publication = {
        title: formData.title,
        content : formData.content,
        contentType: formData.contentType,
        text: null, // Initialize with null
        image: null // Initialize with null
      };
  
      if (publication.contentType === 'text') {
        publication.text = formData.content as string;
      } else if (publication.contentType === 'image' && this.selectedImage) {
        publication.image = this.selectedImage as File;
      }
  
      // Handle the case when text or image is null
      const content = publication.text !== null ? publication.text : publication.image !== null ? publication.image : '';
  
      this.publicationService.createPublication(publication, content).subscribe(
        (createdPublication) => {
          console.log('Publication created successfully:', createdPublication);
          // You can handle the success message or navigation to another page here.
        },
        (error) => {
          console.error('Error creating publication:', error);
          // Handle error here, show error message, etc.
        }
      );
    }
  }
  
  
  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedImage = inputElement.files[0];
    } else {
      this.selectedImage = null;
    }
  }
}
