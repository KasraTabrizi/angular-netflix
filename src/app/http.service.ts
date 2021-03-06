import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiKey = '72146fe8f286acb6e67d2f0ba0c83b14';
  constructor(private http: HttpClient) { }

  getLatestMovies(currentPage) {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=${currentPage}`);
  }

  getMovieDetails(movieId) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=en-US`);
  }

  getMovieCredits(movieId) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.apiKey}&language=en-US`);
  }

  getMovieVideos(movieId) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}&language=en-US`);
  }

  searchMovie(searchQuery, currentPage) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`);
  }

  getMovieReviews(movieId) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${this.apiKey}&language=en-US`);
  }

  getMovieKeywords(movieId) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${this.apiKey}&language=en-US`);
  }

  getDetailsOfCast(personId) {
    return this.http.get(`https://api.themoviedb.org/3/person/${personId}?api_key=${this.apiKey}&language=en-US`);
  }

  getCreditsOfCast(personId) { //Movies and TV Shows
    return this.http.get(`https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${this.apiKey}&language=en-US`);
  }

}