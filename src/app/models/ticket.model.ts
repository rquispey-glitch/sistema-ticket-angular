export interface Ticket {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  prioridad: string;
  estado: string;
  fechaCreacion: string;
  idUsuario: number;
  idTecnico?: number;
}
