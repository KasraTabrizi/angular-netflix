import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss']
})
export class MovieTrailerComponent implements OnInit {

  trailerURL: String = "https://www.themoviedb.org/video/play?key=F95Fk255I4M";

  //trailerURL: String = "https://www.youtube.com/embed?v=oC_XEbF3n2M";

  constructor(public dialogRef: MatDialogRef<MovieTrailerComponent>) { }

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
