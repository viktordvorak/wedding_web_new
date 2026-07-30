import { Component } from '@angular/core';
import { NavigationPageComponent } from '../navigation-page/navigation-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';

interface GalleryPhoto {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavigationPageComponent, FooterPageComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  readonly photos: GalleryPhoto[] = [
    {
      src: 'assets/images/gallery/IMG-20260728-WA0000.jpg',
      alt: 'Fotografie z galerii 1'
    },
    {
      src: 'assets/images/gallery/IMG-20260728-WA0002.jpg',
      alt: 'Fotografie z galerii 2'
    },
    {
      src: 'assets/images/gallery/IMG-20260728-WA0008.jpg',
      alt: 'Fotografie z galerii 3'
    },
    {
      src: 'assets/images/gallery/IMG-20260728-WA0021.jpg',
      alt: 'Fotografie z galerii 4'
    },
    {
      src: 'assets/images/gallery/IMG-20260728-WA0018.jpg',
      alt: 'Fotografie z galerii 5'
    },
    {
      src: 'assets/images/gallery/IMG-20260728-WA0020.jpg',
      alt: 'Fotografie z galerii 6'
    }
  ];
  selectedPhotoIndex: number | null = null;

  get selectedPhoto(): GalleryPhoto | null {
    if (this.selectedPhotoIndex === null) {
      return null;
    }

    return this.photos[this.selectedPhotoIndex] ?? null;
  }

  openLightbox(index: number): void {
    this.selectedPhotoIndex = index;
  }

  closeLightbox(): void {
    this.selectedPhotoIndex = null;
  }

  showPreviousPhoto(): void {
    if (this.selectedPhotoIndex === null) {
      return;
    }

    this.selectedPhotoIndex =
      this.selectedPhotoIndex === 0 ? this.photos.length - 1 : this.selectedPhotoIndex - 1;
  }

  showNextPhoto(): void {
    if (this.selectedPhotoIndex === null) {
      return;
    }

    this.selectedPhotoIndex =
      this.selectedPhotoIndex === this.photos.length - 1 ? 0 : this.selectedPhotoIndex + 1;
  }
}
