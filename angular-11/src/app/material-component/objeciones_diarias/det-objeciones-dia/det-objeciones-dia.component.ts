import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/models/transaction';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { DetRechazosDiaComponent } from '../../rechazos_diarios/det-rechazos-dia/det-rechazos-dia.component';

@Component({
  selector: 'app-det-objeciones-dia',
  templateUrl: './det-objeciones-dia.component.html',
  styleUrls: ['./det-objeciones-dia.component.scss']
})
export class DetObjecionesDiaComponent implements OnInit {

  dataTransaction?: Transaction;

  constructor(
    public dialogRef: MatDialogRef<DetObjecionesDiaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transaction, 
    private serviceTransaction:TransactionServiceService) { }
  
  ngOnInit(): void {
  }
  
  cancelar() {
    this.dialogRef.close();
  }


}
