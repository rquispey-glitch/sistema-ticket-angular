import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-ticket.html',
  styleUrls: ['./crear-ticket.css']
})
export class CrearTicket {
  ticket = {
    titulo: '',
    descripcion: '',
    categoria: '',
    prioridad: '',
    idUsuario: 1
  };

  archivoSeleccionado: File | null = null;

  constructor(private data: DataService, private router: Router) {}

  guardar(): void {
    if (!this.ticket.titulo || !this.ticket.descripcion || !this.ticket.categoria || !this.ticket.prioridad) {
      alert('Completa todos los campos obligatorios');
      return;
    }
    this.data.agregarTicket(this.ticket);
    alert('Ticket creado con éxito');
    this.router.navigate(['/mis-tickets']);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.archivoSeleccionado = input.files[0];
    }
  }
}