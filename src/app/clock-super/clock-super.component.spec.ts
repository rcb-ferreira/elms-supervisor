import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockSuperComponent } from './clock-super.component';

describe('ClockSuperComponent', () => {
  let component: ClockSuperComponent;
  let fixture: ComponentFixture<ClockSuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockSuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
