import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { Transaction } from 'src/app/models/transaction';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { DetObjecionesDiaComponent } from './det-objeciones-dia/det-objeciones-dia.component';
@Component({
  selector: 'app-objeciones_diarias',
  templateUrl: './objeciones_diarias.component.html',
  styleUrls: ['./objeciones_diarias.component.scss']
})
export class ObjecionesDiariasComponent {
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

  detObjDiarios(transaction:Transaction) {
    this.dialog
      .open(DetObjecionesDiaComponent, {
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
