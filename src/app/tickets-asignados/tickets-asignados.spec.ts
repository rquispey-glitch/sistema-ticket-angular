import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsAsignados } from './tickets-asignados';

describe('TicketsAsignados', () => {
  let component: TicketsAsignados;
  let fixture: ComponentFixture<TicketsAsignados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsAsignados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsAsignados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
