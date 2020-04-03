import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nowPlaying: [];
  currentPage: number = 1;
  totalPages: number = 0;
  query: String;
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getLatestMovies(this.currentPage).subscribe(data => {
      this.totalPages = data["total_pages"];
      this.nowPlaying = data['results'];
      console.log(this.nowPlaying);
      console.log(this.totalPages);
    });
  }

  goPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this._http.getLatestMovies(this.currentPage).subscribe(data => {
        this.nowPlaying = data['results'];
      });
    }
  }

  goNextPage() {
    if (this.currentPage < 59) {
      this.currentPage += 1;
      this._http.getLatestMovies(this.currentPage).subscribe(data => {
        this.nowPlaying = data['results'];
      });
    }
  }

}
