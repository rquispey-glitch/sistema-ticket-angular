import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio-sesion.html',
  styleUrls: ['./inicio-sesion.css']
})
export class InicioSesion {

  correo: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  entrar() {

    if (this.correo === 'adm@gmail.com' && this.contrasena === '1234') {
      this.router.navigate(['/dashboard']);
    } else {
      alert("Credenciales incorrectas");
    }
  }
}
