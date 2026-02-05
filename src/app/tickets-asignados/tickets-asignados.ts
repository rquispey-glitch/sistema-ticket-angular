import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTANTE
import { DataService } from '../services/data.service';
import { Ticket } from '../models/ticket.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets-asignados',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Agregar FormsModule
  templateUrl: './tickets-asignados.html',
  styleUrls: ['./tickets-asignados.css']
})
export class TicketsAsignados {

  ticketsAsignados: Ticket[] = [];

  // ✅ Variable que faltaba para el ngModel
  ticket = {
    prioridad: ''
  };

  constructor(private data: DataService, private router: Router) {
    this.ticketsAsignados = this.data.getAsignados();
  }

  tecnicoNombre(id?: number): string {
    return id === 2 ? 'Luis Téc' : 'Técnico no asignado';
  }

  verTicket(id: number): void {
    this.router.navigate(['/ver-ticket', id]);
  }
}