import { Routes } from '@angular/router';

import { Search_TransactionComponent } from './search_transaction/search_transaction.component';

import { Gestion_TransactionComponent } from './gestion_transaction/gestion_transaction.component';
import { Rechazos_DiariosComponent } from './rechazos_diarios/rechazos_diarios.component';
import { ObjecionesDiariasComponent } from './objeciones_diarias/objeciones_diarias.component';
import { GestionCuentaComponent } from './gestion_cuenta/gestion_cuenta.component';
import { CuadraturaComponent } from './cuadratura/cuadratura.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { EditarTransaccionComponent } from './gestion_transaction/editar-transaccion/editar-transaccion.component';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';

export const MaterialRoutes: Routes = [
  {
    path: 'search_transaction',
    component: Search_TransactionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestion_transaction',
    component: Gestion_TransactionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rechazos_diarios',
    component: Rechazos_DiariosComponent
  },
  {
    path: 'objeciones_diarias',
    component: ObjecionesDiariasComponent
  },
  {
    path: 'gestion_cuenta',
    component: GestionCuentaComponent
  },
  {
    path: 'cuadratura',
    component: CuadraturaComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
  {
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },
  {
    path: 'editar-transaccion/:id', 
    component: EditarTransaccionComponent,
    canActivate: [AuthGuard]
  }
];





