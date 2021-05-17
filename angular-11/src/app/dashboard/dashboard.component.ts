import { Component, AfterViewInit, OnInit } from '@angular/core';

declare var require: any;
const data = require('./data.json');
/*export interface PeriodicElement {
  name: string;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Carga Correcta Incoming', weight: 0},
  {name: 'Carga Correcta Rechazos', weight: 0},
  {name: 'Outgoing Pendientes', weight: 0},
  {name: 'Carga de Abono Pendiente', weight: 0},
  {name: 'Carga Erroneas Incoming', weight: 0},
  {name: 'Carga Erroneas Rechazos', weight: 0},
  {name: 'Outgoing Ok', weight: 0},
  {name: 'Carga Abono Ok', weight: 0},
];*/

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  datosOK : any;
  datos1: any;
  datos2: any;
  datos3: any;
  datos4: any;



  ngOnInit(): void {
    console.log({data: data});
	  
    this.datosOK = data;
    this.datos1 = {
      "Pie": {
        "series": [2020, 220]
      },
      "title":"Total Trx Cargas Rechazadas",
      "correctas":"Correctas",
      "erroneas":"Erroneas"
    }
    this.datos2 = {
      "Pie": {
        "series": [220, 220]
      },
      "title":"Total Trx Outgoin",
      "correctas":"OK",
      "erroneas":"Pendientes"
    }
    this.datos3 = {
      "Pie": {
        "series": [220, 220]
      },
      "title":"Total Trx Cargas Abonos",
      "correctas":"OK",
      "erroneas":"Pendientes"
    }
  }

	ngAfterViewInit() { }
  
	//displayedColumns: string[] = ['name', 'weight'];
  //dataSource = ELEMENT_DATA;

}
