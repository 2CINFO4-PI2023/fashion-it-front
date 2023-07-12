import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MustMatch } from "./password-validator.component";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
interface Publication {
  title: string;
  content: string;
  type: string;
  userId: string;
  status: string;
}
interface User {
  _id: string;
  username: string;
  email: string;
}
@Component({
  selector: "app-validation",
  templateUrl: "validation.component.html"
})

export class ValidationComponent implements OnInit {
  selectedStatus: any;

  users: { [key: string]: User } = {};
  publication: Publication = {
    title: '',
    content: '',
    type: '',
    userId: '',
    status: ''
  };
  types: any[] = []; // Populate this array with the available publication types from the server

  pub : any ;
  publicationId: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.publicationId = params['id'];
      console.log('Publication ID:', this.publicationId);
      this.fetchPublication();
    });
  }

  fetchPublication() {
    this.http.get<Publication>('http://localhost:3000/publication/' + this.publicationId)
      .subscribe(
        (publication) => {
          this.publication = publication;
        },
        (error) => {
          console.error('Error fetching publication:', error.message);
          // Handle error case here
        }
      );
  }

  updatePublication() {
    this.http.put('http://localhost:3000/publication/' + this.publicationId, this.publication)
      .subscribe(
        (response) => {
          console.log('Publication updated successfully:', response);
          // Handle success case here
        },
        (error) => {
          console.error('Error updating publication:', error.message);
          // Handle error case here
        }
      );
  }
}
