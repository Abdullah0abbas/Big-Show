import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  bannerRes:any=[];
  trendingMovie:any=[];
  actionMovie:any=[];
  adventureMovie:any=[];
  animationMovie:any=[];
  comedyMovie:any=[];
  documentaryMovie:any=[];
  scienceMovie:any=[];
  thrillerMovie:any=[];

  constructor(private Service: MovieApiServiceService) { }
  ngOnInit() {
    this.bannerData();
    this.trendingData();
    this.getActionMovie();
    this.getAdventureMovie();
    this.getAnimationMovie();
    this.getComedyMovie();
    this.getDocumentaryMovie();
    this.getScienceMovie();
    this.getThrillerMovie()
  }

  bannerData() {
    this.Service.bannerApiData().subscribe((res) => {
      console.log(res)
      this.bannerRes = res.results
    })
  }

  trendingData(){
    this.Service.trendingMovieApiData().subscribe((res)=>{
      console.log(res)
      this.trendingMovie = res.results
    })
  }


  getActionMovie(){
    this.Service.fetchActionMovies().subscribe((res)=>{
      this.actionMovie=res.results;
    })
  }

  getAdventureMovie(){
    this.Service.fetchAdventureMovies().subscribe((res)=>{
      this.adventureMovie=res.results;
    })
  }

  getAnimationMovie(){
    this.Service.fetchAnimationMovies().subscribe((res)=>{
      this.animationMovie=res.results;
    })
  }

  getComedyMovie(){
    this.Service.fetchComedyMovies().subscribe((res)=>{
      this.comedyMovie=res.results;
    })
  }

  getDocumentaryMovie(){
    this.Service.fetchDocumentaryMovies().subscribe((res)=>{
      this.documentaryMovie=res.results;
    })
  }

  getScienceMovie(){
    this.Service.fetchScienceMovies().subscribe((res)=>{
      this.scienceMovie=res.results;
    })
  }

  getThrillerMovie(){
    this.Service.fetchTrailerMovies().subscribe((res)=>{
      this.thrillerMovie=res.results;
    })
  }
}
