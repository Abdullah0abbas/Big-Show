import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails:any;
  movieVideo:any;
  movieCast:any;
  movieRating!: number
  stars: number[] = []
  emptyStars: number[] = []
  constructor(private service:MovieApiServiceService,private router:ActivatedRoute){}

  ngOnInit():void{
    let getParamId = this.router.snapshot.paramMap.get('id')
    this.getMovie(getParamId)
    this.getVideo(getParamId)
    this.getCast(getParamId)
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((res)=>{
      this.movieDetails = res;
      console.log(res);

      this.movieRating = Math.round(res.vote_average)
      this.stars = Array(this.movieRating).fill(1).map((x, i) => i + 1);
      this.emptyStars = Array(10 - this.movieRating).fill(1).map((x, i) => i + 1);
      
    })
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((res)=>{
      console.log(res,'video')
      
      res.results.forEach((element:any) => {
        if(element.type =="Trailer"){
          this.movieVideo = element.key;
        }
      });
      
    })
  }

  getCast(id:any){
    this.service.getMovieCast(id).subscribe((res)=>{
      this.movieCast = res.cast;
      console.log(res,'cast')
    })
  }
}
