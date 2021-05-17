import { Component, Input, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
declare var require: any;

const data= require('./data.json');

export interface Chart {
	type: ChartType;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent;
}

@Component({
  selector: 'app-visiter-graph',
  templateUrl: './visiter-graph.component.html',
  styleUrls: ['./visiter-graph.component.css']
})
export class VisiterGraphComponent implements OnInit {
	@Input()
	dataJson?: any
	@Input()
	title?: any
	@Input()
	correctas?: any
	@Input()
	erroneas?: any

   donuteChart1!: Chart;
//    = {
// 	type: 'Pie',
// 	data: data['Pie'],
// 	options: {
// 		donut: true,
// 		height: 260,
// 		showLabel: false,
// 		donutWidth: 40
// 	}
// };

  constructor() { }

  ngOnInit(): void {
	console.log({dataJson: this.dataJson});


	this.donuteChart1 = {
		type: 'Pie',
		data: this.dataJson['Pie'],
		options: {
			donut: true,
			height: 260,
			showLabel: true,
			donutWidth: 40
		}
	};
  }

}
