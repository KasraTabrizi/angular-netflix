import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {
  nowPlaying: [];
  query: String;
  private sub: any;
  movieQuery: Object;
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private _http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.query = params['query'];
      console.log(this.query);
    });

    this._http.searchMovie(this.query, "1").subscribe(data => {
      this.totalPages = data["total_pages"];
      this.nowPlaying = data['results'];
      this.movieQuery = data;
      console.log(this.movieQuery);
    });

  }

  goPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this._http.searchMovie(this.query, this.currentPage).subscribe(data => {
        this.nowPlaying = data['results'];
      });
    }
  }

  goNextPage() {
    if (this.currentPage < 59) {
      this.currentPage += 1;
      this._http.searchMovie(this.query, this.currentPage).subscribe(data => {
        this.nowPlaying = data['results'];
      });
    }
  }

}
