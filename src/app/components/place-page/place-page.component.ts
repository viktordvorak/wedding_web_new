import { Component } from '@angular/core';
import { FooterPageComponent } from '../footer-page/footer-page.component';
import { RouterOutlet } from '@angular/router';
import { NavigationPageComponent } from '../navigation-page/navigation-page.component';

@Component({
  selector: 'app-place-page',
  imports: [NavigationPageComponent, FooterPageComponent, RouterOutlet],
  templateUrl: './place-page.component.html',
  styleUrl: './place-page.component.css',
})
export class PlacePageComponent {

}
