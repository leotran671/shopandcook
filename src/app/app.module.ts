import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SloganBannerComponent } from './slogan-banner/slogan-banner.component';
import { DescriptionCardComponent } from './description-card/description-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SloganBannerComponent,
    DescriptionCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
