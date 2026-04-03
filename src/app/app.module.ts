import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationPageComponent } from './components/navigation-page/navigation-page.component';
import { FooterPageComponent} from './components/footer-page/footer-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GuestsPageComponent } from './components/guests-page/guests-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    
  ],
  imports: [// Standalone komponenty zde v imports
    BrowserModule,
    AppRoutingModule,
    NavigationPageComponent,
    FooterPageComponent,
    WelcomePageComponent,
    SchedulePageComponent,
    GalleryComponent,
    GuestsPageComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}