import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {

@Output() ToggleMe: EventEmitter<any> = new EventEmitter();

validuser:boolean = true;
closed : boolean;
  constructor() { }

  ngOnInit() {
  }
  toggleSideBar() {
    this.ToggleMe.emit();
  }
  loginclick() {
    this.closed = !this.closed;
    console.log(this.closed);
  }
}
