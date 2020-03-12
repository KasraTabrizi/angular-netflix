import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id: number;
  private sub: any;
  movieDetails: Object;
  movieCredits: Object;
  movieVideos: Object;

  constructor(private _http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this._http.getMovieDetails(this.id).subscribe(data => {
      this.movieDetails = data;
      console.log(this.movieDetails);
    });

    this._http.getMovieCredits(this.id).subscribe(data => {
      this.movieCredits = data;
      console.log(this.movieCredits);
    });

    this._http.getMovieVideos(this.id).subscribe(data => {
      this.movieVideos = data;
      console.log(this.movieVideos);
    });
  }

  getImage() {
    let imageUrl = `https://image.tmdb.org/t/p/original/${this.movieDetails["backdrop_path"]}`;
    return `url(${imageUrl})`;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
