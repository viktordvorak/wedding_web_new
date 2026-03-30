import { Component } from '@angular/core';
import { NavigationPageComponent } from './components/navigation-page/navigation-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [NavigationPageComponent, FooterPageComponent, RouterOutlet],
    standalone: true
  
})
export class AppComponent {
  title = 'wedding-web';
}
