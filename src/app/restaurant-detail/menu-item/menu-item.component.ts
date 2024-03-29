import { MenuItem } from './menu-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemtAppeared', [
      state('ready', style({opcacity: 1})),
      transition('void => ready',[
        style({opacity: 0, transform: 'translateY(-20px}'}),
        animate('400ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready';
  
  @Input() menuItem: MenuItem

  
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  } 
}
