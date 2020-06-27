import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AngularFirestore,AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { FirebaseserviceService } from '../../firebaseservice.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { DataserviceService } from "../../dataservice.service";
import { Router, ActivatedRoute } from "@angular/router";
// import { EventEmitter } from "events";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  loginInvalid: false;
  loginusers: [];
  Users: any;
  NewEmail;
  NewName;
  public retUrl;
  //validuser = false;
  //@Output ValidUser : EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-inferrable-types
  validuser: boolean = true;
  constructor(
    private formbuilder: FormBuilder,
    private datasvc: DataserviceService,
    private router: Router,
    private route: ActivatedRoute,
    public afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private fbs: FirebaseserviceService
  ) {
    this.route.queryParams.subscribe(data =>
      this.retUrl = decodeURIComponent(data['retUrl']));
    if (this.retUrl === 'undefined') {
      this.retUrl = '/';
    }
  }
  getloginurl = "../../../assets/samplejson/login.json";
  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      username: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],
    });
    //   this.fbs.readUsers().subscribe(data => {
    //     this.Users = data.map(e => {
    //       return {
    //         id: e.payload.doc.id,
    //         isEdit: false,
    //         Name: e.payload.doc.data()['signupData'],
    //       };
    //   });
    // });
  }
  onSubmit() {
    const loginData = this.loginform.value;
    this.datasvc.signin(loginData.username, loginData.password, (res: any) => {
      if (!res.error) {
        this.datasvc.registerdetails(res.response.user.email, res.response.user.displayName ? res.response.user.displayName : res.response.user.email);
        // this.router.navigate(["/"]);
        localStorage.setItem('viuDocUserEmail',JSON.stringify(res.response.user.email));
        localStorage.setItem('viuDocUsername', res.response.user.displayName);
        localStorage.setItem('verifyUser', 'false');
        window.location.href = this.retUrl;	
      } else {
        window.alert(res.message);
      }
    });
    // for (let i = 0; i < this.Users.length; i++) {
    //   if (this.Users[i].id !== 'users') {
    //     if (this.Users[i].Name.username === loginData.username && this.Users[i].Name.password === loginData.password) {
    //      this.NewEmail = this.Users[i].Name.username;
    //      this.NewName = this.Users[i].Name.firstname;
    //      console.log(this.NewEmail);
    //      console.log(this.NewName);
    //      this.datasvc.registerdetails(this.NewEmail,this.NewName);
    //     }
    //   }
    // }
  }
  navigate = (routing:string) => {
    this.router.navigate([routing]);
  } 
}
