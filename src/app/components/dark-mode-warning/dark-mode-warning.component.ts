
import { Component, OnInit } from '@angular/core';

type DarkModeWarningVariant = 'generic' | 'samsung' | null;

@Component({
  selector: 'app-dark-mode-warning',
  standalone: true,
  templateUrl: './dark-mode-warning.component.html',
  styleUrl: './dark-mode-warning.component.css'
})
export class DarkModeWarningComponent implements OnInit {
  showWarning = false;
  warningVariant: DarkModeWarningVariant = null;

  ngOnInit(): void {
    const warningDismissed =
      sessionStorage.getItem('dark-mode-warning-dismissed') === 'true';

    if (warningDismissed) {
      return;
    }

    const isSamsungInternet =
      /SamsungBrowser/i.test(navigator.userAgent);

    const prefersDarkMode =
      window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

    // Samsung Internet can force dark mode regardless of the detected preference
    if (isSamsungInternet) {
      this.warningVariant = 'samsung';
    } else if (prefersDarkMode) {
      this.warningVariant = 'generic';
    }

    this.showWarning = this.warningVariant !== null;
  }

  closeWarning(): void {
    this.showWarning = false;
    sessionStorage.setItem('dark-mode-warning-dismissed', 'true');
  }
}
