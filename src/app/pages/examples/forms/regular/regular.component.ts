import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  selector: "app-regular",
  templateUrl: "regular.component.html"
})
export class RegularComponent implements OnInit {
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
  constructor(private http: HttpClient ,private router: Router) {}
  ngOnInit() {
    this.getPubData().subscribe(
      (result) => {
        // Assuming the result is an object with a property called 'users'
         this.pub = result; // Modify this according to the actual structure of your data
      console.log('data : ',result);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
      this.fetchUsers();
    
  
  }
  getPubData(): Observable<any> {
    return this.http.get('http://localhost:3000/publication');
  }
  
  submitForm() {
    this.publication.userId = '64a7111d14f00dcc77f8c77f'; 
    this.publication.type = '64a708570a2c9f82eb14c885'; // Replace with the actual user ID
    this.publication.status = this.selectedStatus[0].itemName;
    this.http.post('http://localhost:3000/publication', this.publication)
      .subscribe(
        (response) => {
          console.log('Publication created successfully:', response);
          // Reset the form after successful submission
          this.publication = {
            title: '',
            content: '',
            type: '',
            userId: '',
            status: ''
          };
        },
        (error) => {
          console.error('Error creating publication:', error.message);
          // Handle error case here
        }
      );
  }
  editPublication(index: String) {
    const publicationId = index;
    console.log("pub id " , publicationId);
    this.http.put('http://localhost:3000/publication/' + publicationId, this.publication)
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
  fetchPublicationById(index : String) {
     const publicationId = index;
    console.log("pub id " , publicationId);
    this.http.get<Publication>('http://localhost:3000/publication/' + publicationId)
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

  

  deletePublication(index: number) {
    const publicationId = this.pub[index]._id;
    this.http.delete(`http://localhost:3000/publication/${publicationId}`)
      .subscribe(
        () => {
          console.log('Publication deleted successfully');
          this.pub.splice(index, 1);
        },
        (error) => {
          console.error('Error deleting publication:', error.message);
          // Handle error case here
        }
      );
  }

  fetchUsers() {
    this.http.get<User[]>('http://localhost:3000/user')
      .subscribe(
        (users) => {
          this.users = users.reduce((acc, user) => {
            acc[user._id] = user;
            return acc;
          }, {});
        },
        (error) => {
          console.error('Error fetching users:', error);
          // Handle error case here
        }
      );
  }
}
