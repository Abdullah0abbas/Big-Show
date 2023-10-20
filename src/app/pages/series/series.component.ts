import { Component } from '@angular/core';
import { SeriesApiServiceService } from 'src/app/service/series-api-service.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  bannerRes:any=[];
  trendingSeries:any=[];
  actionSeries:any=[];
  animationSeries:any=[];
  comedySeries:any=[];
  documentarySeries:any=[];
  warSeries:any=[];
  dramaSeries:any=[];

  constructor(private Service: SeriesApiServiceService) { }
  ngOnInit() {
    this.bannerData();
    this.trendingData();
    this.getActionSeries();
    this.getAnimationSeries();
    this.getComedySeries();
    this.getDocumentarySeries();
    this.getWarSeries();
    this.getDramaSeries()
  }

  bannerData() {
    this.Service.bannerData().subscribe((res) => {
      console.log(res,'banner')
      this.bannerRes = res.results
    })
  }

  trendingData(){
    this.Service.TrendingSeries().subscribe((res)=>{
      console.log(res,'trending')
      this.trendingSeries = res.results
    })
  }


  getActionSeries(){
    this.Service.fetchActionSeries().subscribe((res)=>{
      this.actionSeries=res.results;
      console.log(res,'action');
      
    })
  }

  getAnimationSeries(){
    this.Service.fetchAnimationSeries().subscribe((res)=>{
      this.animationSeries=res.results;
    })
  }

  getComedySeries(){
    this.Service.fetchComedySeries().subscribe((res)=>{
      this.comedySeries=res.results;
    })
  }

  getDocumentarySeries(){
    this.Service.fetchDocumentarySeries().subscribe((res)=>{
      this.documentarySeries=res.results;
    })
  }

  getWarSeries(){
    this.Service.fetchWarSeries().subscribe((res)=>{
      this.warSeries=res.results;
    })
  }

  getDramaSeries(){
    this.Service.fetchDramaSeries().subscribe((res)=>{
      this.dramaSeries=res.results;
    })
  }
}
