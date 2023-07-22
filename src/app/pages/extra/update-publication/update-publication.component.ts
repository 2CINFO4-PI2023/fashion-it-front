import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA ,MatDialogRef } from '@angular/material/dialog';
import { PublicationService } from '../../../services/publication.service';
import { Publication } from '../../../models/publication';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.scss']
})
export class UpdatePublicationComponent {
  publication: Publication;
  publicationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private publicationService: PublicationService,
    public dialogRef: MatDialogRef<UpdatePublicationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Publication
  ) {
    this.publication = { ...data }; // Copy the publication data to a local variable for editing
  }

  ngOnInit(): void {
    this.initializeForm();
    if (this.data) {
      // If data is provided (for update), set the form values and mark as update

      this.publicationForm.patchValue(this.data);
    }
  }

  initializeForm(): void {
    this.publicationForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      status: ['public', Validators.required]
    });
  }

  onSubmit(): void {
 
      // // If updating, call the updatePublication method from the service
      // const updatedPublication: Publication = this.publicationForm.value;
      // const id = this.publicationId ?? '';
      // const publicationId = this.data._id.toString();
      // this.publicationService.updatePublication(publicationId, updatedPublication).subscribe(
      //   (result) => {
      //     console.log('Publication updated:', result);
      //     // Handle success or update the local data if needed
      //   },
      //   (error) => {
      //     console.error('Error updating publication:', error);
      //     // Handle error if needed
      //   }
      // );

  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving changes
  }
}
