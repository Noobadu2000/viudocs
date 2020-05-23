import { Component, OnInit, Input , SimpleChanges, OnChanges} from '@angular/core';
import {DataserviceService} from '../../../dataservice.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  //  @Input() validuser: any;
validuser;
mySubscription: any;
// validuser = true;
  constructor(private datasvc: DataserviceService, private router: Router) {
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
  aboutus() {
    this.router.navigate(['/aboutus']);
  }
  contactus() {
    this.router.navigate(['/contactus']);
  }
  uploadDocuments() {
    this.router.navigate(['/upload_docs']);
  }
  ngOnInit(): void {
   // console.log(this.validuser);
   this.datasvc.getLoginData().subscribe((val) => {
    this.validuser = val;
  });
  console.log(this.validuser);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
