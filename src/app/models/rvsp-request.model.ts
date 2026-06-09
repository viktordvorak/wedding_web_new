export interface RsvpRequest {
  firstName: string;
  lastName: string;
  attendance: 'yes' | 'no';
  companionFirstName?: string;
  companionLastName?: string;
  childrenCount: number;
  dietaryRestrictions?: string;
  note?: string;
}