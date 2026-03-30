import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationPageComponent } from '../navigation-page/navigation-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavigationPageComponent, FooterPageComponent, RouterOutlet],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  photos: string[] = [
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png',
    'assets/images/foto_placeholder2.png'
  ];
  selectedPhoto: string | null = null;

  openLightbox(photo: string): void {
    this.selectedPhoto = photo;
  }

  closeLightbox(): void {
    this.selectedPhoto = null;
  }
}
