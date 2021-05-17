import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';

@Component({
  selector: 'app-gestion_transaction',
  templateUrl: './gestion_transaction.component.html',
  styleUrls: ['./gestion_transaction.component.scss']
})
export class Gestion_TransactionComponent {
  public dataSource: Transaction[];

  constructor(private serviceTransaction:TransactionServiceService){
    this.dataSource = [];
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
}
