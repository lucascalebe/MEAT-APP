import { RadioOption } from './radio-option.model';
import { Component, Input, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
})
export class RadioComponent implements OnInit {

  @Input()
  options: RadioOption[]

  value: any


  constructor() { }

  ngOnInit() {
  }
 

  setValue(value: any): any {
    this.value = value
  }

}
