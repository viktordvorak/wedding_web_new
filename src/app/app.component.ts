import { Component } from '@angular/core';
import { NavigationPageComponent } from './components/navigation-page/navigation-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavigationPageComponent, FooterPageComponent, RouterOutlet],
  standalone: true,
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter', [
          style({
            opacity: 0,
            transform: 'translateY(20px)'
          }),
          animate('1200ms ease-out', style({
            opacity: 1,
            transform: 'translateY(0)'
          }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  title = 'wedding-web';

  prepareRoute(outlet: RouterOutlet): string {
    if (!outlet || !outlet.isActivated) {
      return '';
    }

    return (
      outlet.activatedRouteData?.['animation'] ??
      outlet.activatedRoute?.routeConfig?.path ??
      ''
    );
  }

  logStart(e: any) {
    console.log('ANIMATION START', e);
  }

  logDone(e: any) {
    console.log('ANIMATION DONE', e);
  }
}
