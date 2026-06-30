import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet],
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

  isMultiCardRoute(outlet: RouterOutlet): boolean {
    if (!outlet || !outlet.isActivated) {
      return false;
    }

    const path = outlet.activatedRoute.routeConfig?.path;

    return path === 'place-page' || path === 'guests-page' || path === 'gallery-page';
  }

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
}
