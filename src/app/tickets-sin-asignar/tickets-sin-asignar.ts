import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from '../models/ticket.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tickets-sin-asignar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets-sin-asignar.html',
  styleUrls: ['./tickets-sin-asignar.css']
})
export class TicketsSinAsignar {

  ticketsDisponibles: Ticket[] = [];

  constructor(private data: DataService) {
    this.ticketsDisponibles = this.data.getSinAsignar();
  }

  
  asignarTicket(ticket: Ticket) {

    
    ticket.estado = "Abierto";

    
    ticket.idTecnico = 2;

    alert("Ticket asignado correctamente");
  }
}
