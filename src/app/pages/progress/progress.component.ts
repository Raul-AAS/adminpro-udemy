import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progress1: number;
  progress2: number;

  constructor() {
    this.progress1 = 20;
    this.progress2 = 40;
  }

  ngOnInit() {
  }

}
