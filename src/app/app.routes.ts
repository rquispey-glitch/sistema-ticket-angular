import { Routes } from '@angular/router';
import { InicioSesion} from './inicio-sesion/inicio-sesion';
import { Dashboard } from './dashboard/dashboard';
import { MisTickets } from './mis-tickets/mis-tickets';
import { TicketsAsignados } from './tickets-asignados/tickets-asignados';
import { TicketsSinAsignar } from './tickets-sin-asignar/tickets-sin-asignar';
import { CrearTicket} from './crear-ticket/crear-ticket';

export const routes: Routes = [
  { path: 'inicio-sesion', component: InicioSesion },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'mis-tickets', component: MisTickets },
      { path: 'asignados', component: TicketsAsignados },
      { path: 'sin-asignar', component: TicketsSinAsignar },
      { path: 'crear-ticket', component: CrearTicket },
      { path: '', redirectTo: 'mis-tickets', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' }
];