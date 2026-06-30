import { Component } from '@angular/core';
import { NavigationPageComponent } from '../navigation-page/navigation-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';

@Component({
  selector: 'app-guests-page',
  imports: [NavigationPageComponent, FooterPageComponent],
  templateUrl: './guests-page.component.html',
  styleUrl: './guests-page.component.css'
})
export class GuestsPageComponent {

}
