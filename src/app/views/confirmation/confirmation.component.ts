import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Confirm Deletion</h2>
    <mat-dialog-content>
      Are you sure you want to delete this category?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancelClick()">Cancel</button>
      <button mat-button color="warn" (click)="onConfirmClick()">Delete</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmationComponent   {
  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
