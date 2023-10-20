import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesApiServiceService {

  baseURL = 'https://api.themoviedb.org/3'
  ApiKey = 'bd84104ff6ac80dd494e9d9730c3e203'

  constructor(private http:HttpClient) { }

  // bannerApiData
  bannerData():Observable<any>{
    return this.http.get(`${this.baseURL}/trending/tv/week?api_key=${this.ApiKey}`)
  }

  // TrendingSeries
  TrendingSeries():Observable<any>{
    return this.http.get(`${this.baseURL}/trending/tv/week?api_key=${this.ApiKey}`)
  }

  // seriesDetails
  getseriesDetails(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/tv/${data}?api_key=${this.ApiKey}`)
  }

   // seriesVideo
   getseriesVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/tv/${data}/videos?api_key=${this.ApiKey}`)
  }

  // seriesCast
  getseriesCast(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/tv/${data}/credits?api_key=${this.ApiKey}`)
  }

   // Action
   fetchActionSeries():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/tv?api_key=${this.ApiKey}&with_genres=10759`)
  }

   // Animation
   fetchAnimationSeries():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/tv?api_key=${this.ApiKey}&with_genres=16`)
  }

   // Comedy
   fetchComedySeries():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/tv?api_key=${this.ApiKey}&with_genres=35`)
  }

   // Documentary
   fetchDocumentarySeries():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/tv?api_key=${this.ApiKey}&with_genres=99`)
  }

   // War
   fetchWarSeries():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/tv?api_key=${this.ApiKey}&with_genres=10768`)
  }

   // Drama
   fetchDramaSeries():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/tv?api_key=${this.ApiKey}&with_genres=18`)
  }
}
