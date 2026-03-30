import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GuestsPageComponent } from './components/guests-page/guests-page.component';
import { PlacePageComponent } from './components/place-page/place-page.component';

const routes: Routes = [
  {path: 'welcome-page', component: WelcomePageComponent},
  {path: 'place-page', component: PlacePageComponent},
  {path: 'schedule-page', component: SchedulePageComponent},
  {path: 'gallery-page', component: GalleryComponent},
  {path: 'guests-page', component: GuestsPageComponent},
  {path: '', redirectTo: '/welcome-page', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }