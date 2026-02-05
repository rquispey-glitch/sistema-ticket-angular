import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Ticket } from '../models/ticket.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Ana López', correo: 'ana@correo.com', contrasena: '1234', rol: 'usuario' },
    { id: 2, nombre: 'Luis Téc', correo: 'luis@correo.com', contrasena: '1234', rol: 'tecnico' }
  ];

  private tickets: Ticket[] = [
    { id: 1, titulo: 'Impresora no imprime', descripcion: 'No sale tinta roja', categoria: 'Hardware', prioridad: 'Alta', estado: 'Abierto', fechaCreacion: '2026-02-04', idUsuario: 1 },
    { id: 2, titulo: 'Error al iniciar sesión', descripcion: 'Credenciales inválidas', categoria: 'Software', prioridad: 'Media', estado: 'En Proceso', fechaCreacion: '2026-02-04', idUsuario: 1, idTecnico: 2 },
    { id: 3, titulo: 'Pantalla en negro', descripcion: 'Monitor no enciende', categoria: 'Hardware', prioridad: 'Alta', estado: 'Sin Asignar', fechaCreacion: '2026-02-05', idUsuario: 1 }
  ];

  login(correo: string, contrasena: string): Usuario | null {
    return this.usuarios.find(u => u.correo === correo && u.contrasena === contrasena) || null;
  }

  getMisTickets(usuarioId: number): Ticket[] {
    return this.tickets.filter(t => t.idUsuario === usuarioId);
  }

  getAsignados(): Ticket[] {
    return this.tickets.filter(t => t.idTecnico !== undefined);
  }

  getSinAsignar(): Ticket[] {
    return this.tickets.filter(t => t.idTecnico === undefined);
  }

  agregarTicket(t: Omit<Ticket, 'id' | 'fechaCreacion' | 'estado'>): void {
    this.tickets.push({
      ...t,
      id: this.tickets.length + 1,
      fechaCreacion: new Date().toISOString().split('T')[0],
      estado: 'Abierto'
    });
  }
}