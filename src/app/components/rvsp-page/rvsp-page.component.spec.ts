import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvspPageComponent } from './rvsp-page.component';

describe('RvspPageComponent', () => {
  let component: RvspPageComponent;
  let fixture: ComponentFixture<RvspPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RvspPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvspPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
