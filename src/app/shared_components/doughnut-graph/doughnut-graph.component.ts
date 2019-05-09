import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-graph',
  templateUrl: './doughnut-graph.component.html',
  styles: []
})
export class DoughnutGraphComponent implements OnInit {

  @Input() public ChartLabels: string[] = [''];
  @Input() public ChartData: number[] = [];
  @Input() public ChartType: string = '';
  @Input() public title: string;

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
