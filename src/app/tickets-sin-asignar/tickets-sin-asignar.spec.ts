import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsSinAsignar } from './tickets-sin-asignar';

describe('TicketsSinAsignar', () => {
  let component: TicketsSinAsignar;
  let fixture: ComponentFixture<TicketsSinAsignar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsSinAsignar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsSinAsignar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
