import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../../services/publication.service';
import { ActivatedRoute } from '@angular/router';
import { Publication  ,Comment , Rating } from '../../../models/publication';
import { User } from '../../../models/user';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog from @angular/material/dialog
import {UpdatePublicationComponent} from '../update-publication/update-publication.component'


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  user: User;
  publications: Publication[];
  publicationId: string | null;
  publication: Publication;
  newCommentContent: string;
  newRating: number;
  errorMessage: string;

  constructor(private publicationService: PublicationService ,private dialog: MatDialog ,  private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.publicationId = id;
        this.getPublication();
      } else {
        this.errorMessage = 'Publication ID is missing.';
      }
    });
    this.loadPublicationsWithDetails();
  }
  getPublication(): void {
    const id = this.publicationId ?? '';
    this.publicationService.getPublicationById(id).subscribe(
      (publication) => {
        this.publication = publication;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Failed to load the publication. Please try again later.';
      }
    );
  }

  onCommentSubmit(): void {
    if (this.newCommentContent) {
      const newComment: Comment = {
        userId: '6494dfc9408fa7eb955272be', // Replace with the actual user ID
        content: this.newCommentContent
      };
      const id = this.publicationId ?? '';
      this.publicationService.createComment(id, newComment).subscribe((updatedPublication) => {
        this.publication = updatedPublication;
        this.newCommentContent = '';
      });
    }
  }

  onRatingSubmit(): void {
    if (this.newRating >= 1 && this.newRating <= 5) {
      const newRating: Rating = {
        userId: '6494dfc9408fa7eb955272be', // Replace with the actual user ID
        rating: this.newRating
      };
      const id = this.publicationId ?? '';
      this.publicationService.addRating(id, newRating).subscribe((updatedPublication) => {
        this.publication = updatedPublication;
        this.newRating = 0;
      });
    }
  }
  loadPublicationsWithDetails(): void {
    this.publicationService.getAllPublications().subscribe(
      (publications) => {
        // Once we fetch the publications, let's load their comments and ratings
        this.publications = publications;
        this.loadCommentsAndRatings();
        console.log("pub" , this.publications);
      },
      (error) => {
        console.error('Error fetching publications:', error);
        // Handle error here, show error message, etc.
      }
    );
  }

  loadCommentsAndRatings(): void {
    this.publications.forEach((publication) => {
      const id = this.publicationId ?? '';
      this.publicationService.getPublicationById(id).subscribe(
        (detailedPublication) => {
          publication.comments = detailedPublication.comments;
          publication.ratings = detailedPublication.ratings;
          console.log("comm" , publication.comments);
          console.log("comm" , publication.ratings);
        },
        (error) => {
          console.error('Error fetching comments and ratings for publication:', id);
          // Handle error here, show error message, etc.
        }
      );
    });
  }
  getStarRating(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? true : false;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starString = '';
    for (let i = 0; i < fullStars; i++) {
      starString += 'star ';
    }
    
    if (halfStar) {
      starString += 'star_half ';
    }
    
    for (let i = 0; i < emptyStars; i++) {
      starString += 'star_border ';
    }
  
    return starString.trim();
  }
  
  updatePublication(publication: Publication): void {
    // Call the dialog to show the update form
    const dialogRef = this.dialog.open(UpdatePublicationComponent, {
      data: publication
    });

    // Handle the dialog result
    dialogRef.afterClosed().subscribe((result: Publication) => {
      if (result) {
        const id = this.publicationId ?? '';
        // If the dialog returns a publication (after saving), update the local list
        const index = this.publications.findIndex((p) => id === id);
        if (index !== -1) {
          this.publications[index] = result;
        }
      }
    });
  }

  deletePublication(publicationId: string): void {
    this.publicationService.deletePublication(publicationId).subscribe(
      (deletedPublication) => {
        console.log('Publication deleted:', deletedPublication);
        const id = this.publicationId ?? '';
        // If the publication is successfully deleted, remove it from the local list
        this.publications = this.publications.filter((publication) => id !== publicationId);
      },
      (error) => {
        console.error('Error deleting publication:', error);
      }
    );
  }
}
