import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RsvpService } from 'src/app/services/rvsp-service.service';

type Attendance = 'yes' | 'no';

@Component({
  selector: 'app-rvsp-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rvsp-page.component.html',
  styleUrl: './rvsp-page.component.css',
})
export class RvspPageComponent {
  flashMessage = '';
  flashMessageType: 'success' | 'error' | null = null;
  submitted = false;
  submitError?: string;

  rsvpForm = this.fb.nonNullable.group({
    attendance: this.fb.nonNullable.control<Attendance>('yes', Validators.required),
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    companionFirstName: [''],
    companionLastName: [''],
    childrenCount: [0],
    dietaryRestrictions: [''],
    note: ['']
  });

  constructor(
    private fb: FormBuilder,
    private service: RsvpService,
    private router: Router
  ) { }

  onSubmit(): void {
    if (this.rsvpForm.invalid || this.submitted) {
      this.rsvpForm.markAllAsTouched();
      return;
    }
    this.submitted = true;

    this.service.submitRsvp(this.rsvpForm.getRawValue()).subscribe({
      next: () => {
        this.flashMessage = 'Odeslání proběhlo úspěšně. Děkujeme!';
        this.flashMessageType = 'success';
        setTimeout(() => {
          this.flashMessageType = null;
          this.rsvpForm.reset({
            attendance: 'yes',
            firstName: '',
            lastName: '',
            companionFirstName: '',
            companionLastName: '',
            childrenCount: 0,
            dietaryRestrictions: '',
            note: ''
          });
          this.router.navigate(['/welcome-page']);
        }, 1800);
      },
      error: () => {
        this.submitted = false;
        this.flashMessage = 'Odeslání se nepodařilo. Zkuste to prosím znovu.';
        this.flashMessageType = 'error';

        setTimeout(() => { this.flashMessageType = null; }, 3000);
      }
    });
  }
}