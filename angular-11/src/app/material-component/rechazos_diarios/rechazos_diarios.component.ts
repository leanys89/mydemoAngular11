import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Transaction } from 'src/app/models/transaction';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { DetRechazosDiaComponent } from './det-rechazos-dia/det-rechazos-dia.component';
//import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-rechazos_diarios',
  templateUrl: './rechazos_diarios.component.html',
  styleUrls: ['./rechazos_diarios.component.scss']
})
export class Rechazos_DiariosComponent {
    public dataSource: Transaction[];
    public dialog: MatDialog;

    constructor(dialog:MatDialog, private serviceTransaction:TransactionServiceService){
      this.dataSource = [];
      this.dialog = dialog;
    }
    
    panelOpenState = false;
    labelPosition: 'before' | 'after' = 'after';
    displayedColumns: string[] = ['num_tc','fecha','comercio','pais','origen','mont_orig','monto_fact'
    ,'cod_razon','status', 'detalle'];
    
    ngOnInit(): void {
      this.serviceTransaction.getAllTransaction().subscribe(
        response => {
          if(+response.status === 200){
            this.dataSource = response.data;
          }
          else{
            console.log(response.message);
          }
        }
      );
    }

    detRechazosDiarios(transaction:Transaction) {
      this.dialog
        .open(DetRechazosDiaComponent, {
          width: '60%',
          data: transaction
        })
        .afterClosed()
        .subscribe(success => {
          if (success) {
           
          }
    });
  }

}
