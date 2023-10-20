import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesApiServiceService } from 'src/app/service/series-api-service.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent {
  seriesDetails:any;
  seriesVideo:any;
  seriesCast:any;
  seriesRating!: number
  stars: number[] = []
  emptyStars: number[] = []

  constructor(private service:SeriesApiServiceService,private router:ActivatedRoute){}

  ngOnInit():void{
    let getParamId = this.router.snapshot.paramMap.get('id')
    this.getseries(getParamId)
    this.getVideo(getParamId)
    this.getCast(getParamId)
  }

  getseries(id:any){
    this.service.getseriesDetails(id).subscribe((res)=>{
      this.seriesDetails = res;
      console.log(res);

      this.seriesRating = Math.round(res.vote_average)
      this.stars = Array(this.seriesRating).fill(1).map((x, i) => i + 1);
      this.emptyStars = Array(10 - this.seriesRating).fill(1).map((x, i) => i + 1);
      
    })
  }

  getVideo(id:any){
    this.service.getseriesVideo(id).subscribe((res)=>{
      console.log(res,'video')
      
      res.results.forEach((element:any) => {
        if(element.type =="Trailer"){
          this.seriesVideo = element.key;
        }
      });
      
    })
  }

  getCast(id:any){
    this.service.getseriesCast(id).subscribe((res)=>{
      this.seriesCast = res.cast;
      console.log(res,'cast')
    })
  }
}
