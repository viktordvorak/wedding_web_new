import { Component } from '@angular/core';
import { NavigationPageComponent } from '../navigation-page/navigation-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guests-page',
    imports: [NavigationPageComponent, FooterPageComponent, RouterOutlet],
  templateUrl: './guests-page.component.html',
  styleUrl: './guests-page.component.css'
})
export class GuestsPageComponent {

}
