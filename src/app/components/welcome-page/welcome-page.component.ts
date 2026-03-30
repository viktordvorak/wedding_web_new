import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  imports: [RouterModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css',
  standalone:true
})
export class WelcomePageComponent  implements AfterViewInit {

  ngAfterViewInit() {
    const images = document.querySelectorAll('.slider img');
    const indicators = document.querySelectorAll('.slider-indicators .indicator');
    let currentIndex = 0;

    setInterval(() => {
      images[currentIndex]?.classList.remove('active');
      indicators[currentIndex]?.classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex]?.classList.add('active');
      indicators[currentIndex]?.classList.add('active');
    }, 5000);

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        images[currentIndex]?.classList.remove('active');
        indicators[currentIndex]?.classList.remove('active');
        currentIndex = index;
        images[currentIndex]?.classList.add('active');
        indicators[currentIndex]?.classList.add('active');
      });
    });
  }

}
