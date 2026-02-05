import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTickets } from './mis-tickets';

describe('MisTickets', () => {
  let component: MisTickets;
  let fixture: ComponentFixture<MisTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisTickets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisTickets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
