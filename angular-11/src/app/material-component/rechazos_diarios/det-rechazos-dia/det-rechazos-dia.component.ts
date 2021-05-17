import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/models/transaction';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';

@Component({
  selector: 'app-det-rechazos-dia',
  templateUrl: './det-rechazos-dia.component.html',
  styleUrls: ['./det-rechazos-dia.component.css']
})
export class DetRechazosDiaComponent implements OnInit {

  dataTransaction?: Transaction;

  constructor(
    public dialogRef: MatDialogRef<DetRechazosDiaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transaction, 
    private serviceTransaction:TransactionServiceService) { }
  
  ngOnInit(): void {
  }
  
  cancelar() {
    this.dialogRef.close();
  }



}
