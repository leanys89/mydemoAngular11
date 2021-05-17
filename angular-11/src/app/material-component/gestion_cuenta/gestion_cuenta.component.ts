import {Component} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-gestion_cuenta',
  templateUrl: './gestion_cuenta.component.html',
  styleUrls: ['./gestion_cuenta.component.scss']
})
export class GestionCuentaComponent {

  displayedColumns: string[] = ['fecha','accion','causal','razon','moneda','monto','usuario'];

}
