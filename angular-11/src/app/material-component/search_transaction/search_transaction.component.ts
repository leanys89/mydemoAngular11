import { Component, OnInit } from '@angular/core';
import {DetalleComponent} from './detalles/detalle.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { Transaction } from 'src/app/models/transaction';
import { Filter } from 'src/app/models/filter';

interface Categorias {
  id: number;
  description: string;
}
 
@Component({
  selector: 'app-search_transaction',
  templateUrl: './search_transaction.component.html',
  styleUrls: ['./search_transaction.component.scss']
})

export class Search_TransactionComponent implements OnInit {
  public dialog: MatDialog;
  public dataSource: Transaction[];
  public filter:Filter;
  public ct?:number;
 // public selectedValue:
  
  categs: Categorias[] = [
    {id: 1, description: 'Primer Contracargo Total'},
    {id: 2, description: 'Segundo Contracargo Parcial'},
    {id: 3, description: 'Representación Total'},
    {id: 4, description: 'Recuperación de Cobros de Cargo de Outgoing'},
    {id: 5, description: 'Primer Contracargo Parcial'},
    {id: 6, description: 'Petición de Vale'},
    {id: 7, description: 'Representación Parcial'},
    {id: 8, description: 'Segundo Contracargo Total'},
    {id: 9, description: 'Confirmación de Petición de Vale'},
    {id: 10, description: 'Recuperación de Cobros de Cargo de Incoming'}
  ];

  constructor(dialog:MatDialog, private serviceTransaction:TransactionServiceService) { 
    this.dialog = dialog;
    this.dataSource = [];
    this.filter = {};
  }
  displayedColumns: string[] = ['num_tc','comercio','pais','mont_orig','monto'
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

  search():void{
    this.serviceTransaction.filterTransaction(this.filter).subscribe(
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

  clearFilters():void{
    this.filter.ct = undefined;
    this.search();
  }
 
  detalles(transaction:Transaction) {
    this.dialog
      .open(DetalleComponent, {
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
