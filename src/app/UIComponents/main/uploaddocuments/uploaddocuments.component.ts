import { FirebaseserviceService } from './../../../firebaseservice.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
@Component({
  selector: 'app-uploaddocuments',
  templateUrl: './uploaddocuments.component.html',
  styleUrls: ['./uploaddocuments.component.css']
})
export class UploaddocumentsComponent implements OnInit {
  panelOpenState = false;
  adhars;
  pans;
  loggedInUser: string;
  public isAdharUploaded: boolean = false;
  public isPanUploaded: boolean = false;
  public doc = {
    adhar:'',
    pan:''
  }
  constructor(private fbs: FirebaseserviceService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let email = localStorage.getItem('viuDocUserEmail');
    email = email ? JSON.parse(email) : '';
    if (email) {
      this.loggedInUser = email;
    }
    this.fbs.getDoc("adharfiles").subscribe(data => {
      this.checIfAttachmentAdded('adhar', data);

    });

    this.fbs.getDoc("panfiles").subscribe(data => {
      this.checIfAttachmentAdded('pan', data);

    });
  }
  checIfAttachmentAdded = (attachmentType: string, data: any) => {
    if (attachmentType === 'adhar') {
      this.adhars = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data(),
        };
      });
      const adhar = _.find(this.adhars, (ele: any) => { return ele.Name.user == this.loggedInUser });
      if (adhar) {
        this.doc.adhar = adhar;
        this.isAdharUploaded = true;
      } else {
        this.isAdharUploaded = false;
      }
      return;
    }
    this.pans = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        Name: e.payload.doc.data(),
      };
    });
    const pans = _.find(this.pans, (ele: any) => { return ele.Name.user == this.loggedInUser })
    if (pans) {
      this.doc.pan = pans;
      this.isPanUploaded = true;
    } else {
      this.isPanUploaded = false;
    }
  }
  getByPassImg = (img: any) => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(img.Name.downloadURL);
  }

}
