import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataserviceService } from '../../../dataservice.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {

  @Output() ToggleMe: EventEmitter<any> = new EventEmitter();

  validuser = false;
  verfierUser = false;
  closed: boolean;
  panelOpenState: boolean;
  mySubscription: any;
  public isLoggedIn: boolean = false;
  constructor(public datasvc: DataserviceService, public router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    let email = localStorage.getItem('viuDocUserEmail');
    email = email? JSON.parse(email): '';
    // tslint:disable-next-line: deprecation
    if (email) {
      this.isLoggedIn = true;
    }
    // this.datasvc.getLoginData().subscribe((val) => {
    //   this.validuser = val;
    // });
    // this.datasvc.getverfierLoginData().subscribe((val) => {
    //   this.verfierUser = val;
    // });
  }
  toggleSideBar() {
    this.ToggleMe.emit();
  }
  clicking() {
    this.panelOpenState = !this.panelOpenState;
  }
  loginclick() {
    // this.closed = !this.closed;

    console.log(this.closed);
  }
  logout = () => {
    //this.datasvc.signout();
    localStorage.clear();
    window.location.href = '/auth';	
  }

  route = (link: string) => {
    return this.router.navigate([link]);
  }
}
