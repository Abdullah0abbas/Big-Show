import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private Movieservice: MovieApiServiceService,private router:Router) { }

  searchRes: any;
  id:any;

  searchForm = new FormGroup({
    'Name': new FormControl(null),
  })

  submitForm() {
    console.log(this.searchForm.value);

    this.Movieservice.getSearchMovie(this.searchForm.value).subscribe((res) => {
      console.log(res)
      this.searchRes = res.results;
    })
  }

  navigateTo(event:any){
   console.log(event.id);
   if(event.media_type === 'movie'){
    this.router.navigate([`/movie/${event.id}`])
   }
   else{
    this.router.navigate([`/series/${event.id}`])
   }
  }




  ngOnInit() {
    
  }
}
