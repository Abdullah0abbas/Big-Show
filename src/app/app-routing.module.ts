import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './pages/search/search.component';
import { SeriesDetailsComponent } from './pages/series-details/series-details.component';
import { SeriesComponent } from './pages/series/series.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'series',component:SeriesComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'series/:id',component:SeriesDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
