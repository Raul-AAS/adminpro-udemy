import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {

  // Receive data from another component
  @Input() percentage: number;
  @Input() label: string;

  // Send data to other component
  @Output() newValue: EventEmitter<number> = new EventEmitter();

  // Receive data from a specific HTML element
  @ViewChild('txtPercentage') txtPercentage: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onChanges( newValue: number )
  {
    if ( newValue >= 100 )
    {
      this.percentage = 100;
    } else if (newValue <= 0)
    {
      this.percentage = 0;
    } else
    {
      this.percentage = newValue;
    }

    this.txtPercentage.nativeElement.value = this.percentage;
    this.newValue.emit( this.percentage );
    this.txtPercentage.nativeElement.focus();
  }

  changeValue( value: number )
  {
    if ( this.percentage + value <= 100 && this.percentage + value >= 0 ) {
      this.percentage += value;
    }

    this.newValue.emit( this.percentage );
  }

}
