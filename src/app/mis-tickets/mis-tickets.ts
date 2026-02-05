import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Ticket } from '../models/ticket.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mis-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './mis-tickets.html',
  styleUrls: ['./mis-tickets.css']
})
export class MisTickets {
  tickets: Ticket[] = [];
  ticketsFiltrados: Ticket[] = [];
  filtroEstado = '';
  filtroPrioridad = '';
  filtroCategoria = '';

  constructor(private data: DataService, private router: Router) {
    const usr = JSON.parse(localStorage.getItem('usuario')!);
    this.tickets = this.data.getMisTickets(usr.id);
    this.ticketsFiltrados = [...this.tickets];
  }

  aplicarFiltro(): void {
    this.ticketsFiltrados = this.tickets.filter(t => {
      return (
        (this.filtroEstado ? t.estado === this.filtroEstado : true) &&
        (this.filtroPrioridad ? t.prioridad === this.filtroPrioridad : true) &&
        (this.filtroCategoria ? t.categoria === this.filtroCategoria : true)
      );
    });
  }

  limpiarFiltros(): void {
    this.filtroEstado = '';
    this.filtroPrioridad = '';
    this.filtroCategoria = '';
    this.ticketsFiltrados = [...this.tickets];
  }

  verTicket(id: number): void {
    this.router.navigate(['/ver-ticket', id]);
  }

  editarTicket(id: number): void {
    this.router.navigate(['/editar-ticket', id]);
  }
}