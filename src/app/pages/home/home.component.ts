import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    this.toggleFlashing();
  }

  shouldFlash: boolean = false;


  toggleFlashing() {
    this.shouldFlash = !this.shouldFlash;
  }
}
