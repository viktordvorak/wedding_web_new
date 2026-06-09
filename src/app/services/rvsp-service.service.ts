import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RsvpRequest } from '../models/rvsp-request.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RsvpService {
  constructor(private http: HttpClient) { }

  submitRsvp(data: RsvpRequest) {
    return this.http.post('http://localhost:3000/api/rsvp', data);
  }

}
