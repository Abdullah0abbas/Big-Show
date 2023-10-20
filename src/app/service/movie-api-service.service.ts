import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseURL = 'https://api.themoviedb.org/3'
  ApiKey = 'bd84104ff6ac80dd494e9d9730c3e203'

  // bannerApiData
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseURL}/trending/movie/week?api_key=${this.ApiKey}`)
  }

  // trendingMovies
  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseURL}/trending/movie/day?api_key=${this.ApiKey}`)
  }

  // searchMovie
  getSearchMovie(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/search/multi?api_key=${this.ApiKey}&query=${data.Name}`)
  }

  // movieDetails
  getMovieDetails(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/movie/${data}?api_key=${this.ApiKey}`)
  }

  // movieVideo
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/movie/${data}/videos?api_key=${this.ApiKey}`)
  }

  // movieCast
  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/movie/${data}/credits?api_key=${this.ApiKey}`)
  }

  // Action
  fetchActionMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.ApiKey}&with_genres=27`)
  }

   // Adventure
   fetchAdventureMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.ApiKey}&with_genres=12`)
  }

   // Animation
   fetchAnimationMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.ApiKey}&with_genres=16`)
  }

   // Comedy
   fetchComedyMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.ApiKey}&with_genres=35`)
  }

   // Documentary
   fetchDocumentaryMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.ApiKey}&with_genres=99`)
  }

   // Science
   fetchScienceMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.ApiKey}&with_genres=878`)
  }

   // Trailer
   fetchTrailerMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.ApiKey}&with_genres=53`)
  }
  
}
