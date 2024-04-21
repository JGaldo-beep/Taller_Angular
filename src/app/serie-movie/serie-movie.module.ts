import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieMovieListComponent } from './serie-movie-list/serie-movie-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [SerieMovieListComponent],
  declarations: [SerieMovieListComponent],
})
export class SerieMovieModule {}
