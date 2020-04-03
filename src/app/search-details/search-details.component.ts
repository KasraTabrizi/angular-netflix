import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {
  query: String;
  private sub: any;
  movieQuery: Object;

  constructor(private _http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.query = params['query'];
    });

    this._http.searchMovie(this.query).subscribe(data => {
      this.movieQuery = data;
      console.log(this.movieQuery);
    });

  }

}
