import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieMovieModule } from './serie-movie/serie-movie.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [	AppComponent,
      NavbarComponent
   ],
  imports: [BrowserModule, AppRoutingModule, SerieMovieModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
