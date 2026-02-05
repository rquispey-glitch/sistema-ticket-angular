export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  contrasena: string;
  rol: 'usuario' | 'tecnico' | 'admin';
}
