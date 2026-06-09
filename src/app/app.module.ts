import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationPageComponent } from './components/navigation-page/navigation-page.component';
import { FooterPageComponent} from './components/footer-page/footer-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GuestsPageComponent } from './components/guests-page/guests-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RvspPageComponent } from './components/rvsp-page/rvsp-page.component';

@NgModule({
  declarations: [
    
  ],
  imports: [// Standalone komponenty zde v imports
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    NavigationPageComponent,
    FooterPageComponent,
    WelcomePageComponent,
    RvspPageComponent,
    GalleryComponent,
    GuestsPageComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}