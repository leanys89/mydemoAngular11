import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { ChipComponent } from './chip/chip.component';
import { ObjetarComponent } from './objetar/objetar.component';
import { TokenizadaComponent } from './tokenizada/tokenizada.component';

@Component({
  selector: 'app-editar-transaccion',
  templateUrl: './editar-transaccion.component.html',
  styleUrls: ['./editar-transaccion.component.scss']
})
export class EditarTransaccionComponent implements OnInit {
  dataTransaction?: Transaction;
  public dialogToken: MatDialog;
  public dialogChip: MatDialog;
  
  constructor(private _route:ActivatedRoute, private serviceTransaction:TransactionServiceService, dialog:MatDialog) { 
    this.dialogToken = dialog;
    this.dialogChip = dialog;
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this.serviceTransaction.getTransaction(id).subscribe(
      response => {
        if(+response.status === 200){
          this.dataTransaction = response.data;
        }else{
          console.log(response.message);
        }
      }
    );
  }

 tokenizada(): void {
  this.dialogToken
  .open(TokenizadaComponent, {
    width: '25%',
  })
  .afterClosed()
  .subscribe(success => {
    if (success) {
     
    }
  });
}

infoChip(): void {
  this.dialogChip
  .open(ChipComponent, {
    width: '60%',
    //height: '60%'
  })
  .afterClosed()
  .subscribe(success => {
    if (success) {}
  });
}

infoObjetar(): void {
  this.dialogChip
  .open(ObjetarComponent, {
    width: '60%',
    //height: '60%'
  })
  .afterClosed()
  .subscribe(success => {
    if (success) {}
  });
}

}
