import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss']
})
export class MovieTrailerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MovieTrailerComponent>) { }

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
