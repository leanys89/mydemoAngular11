import 'hammerjs';
import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, LocationStrategy, PathLocationStrategy  } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MaterialRoutes } from './material.routing';
import { Search_TransactionComponent } from './search_transaction/search_transaction.component';
import { DetalleComponent } from './search_transaction/detalles/detalle.component';

import { Gestion_TransactionComponent } from './gestion_transaction/gestion_transaction.component';

import { Rechazos_DiariosComponent } from './rechazos_diarios/rechazos_diarios.component';
import { EditarTransaccionComponent } from './gestion_transaction/editar-transaccion/editar-transaccion.component';
import { TokenizadaComponent } from './gestion_transaction/editar-transaccion/tokenizada/tokenizada.component';
import { ChipComponent } from './gestion_transaction/editar-transaccion/chip/chip.component';
import { ObjetarComponent } from './gestion_transaction/editar-transaccion/objetar/objetar.component';
import { DetRechazosDiaComponent } from './rechazos_diarios/det-rechazos-dia/det-rechazos-dia.component';

import { ObjecionesDiariasComponent } from './objeciones_diarias/objeciones_diarias.component';
import { GestionCuentaComponent } from './gestion_cuenta/gestion_cuenta.component';
import { CuadraturaComponent } from './cuadratura/cuadratura.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import { DetObjecionesDiaComponent } from './objeciones_diarias/det-objeciones-dia/det-objeciones-dia.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
    MatTabsModule
    
  ],
  providers: [
    {
      provide: 'canActivateTeam',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true,
      //useClass: PathLocationStrategy
    }
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    Search_TransactionComponent,
    DetalleComponent,
    Gestion_TransactionComponent,
    Rechazos_DiariosComponent,
    ObjecionesDiariasComponent,
    GestionCuentaComponent,
    CuadraturaComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    EditarTransaccionComponent,
    TokenizadaComponent,
    ChipComponent,
    ObjetarComponent,
    DetRechazosDiaComponent,
    DetObjecionesDiaComponent,
  ]
})
export class MaterialComponentsModule {}
