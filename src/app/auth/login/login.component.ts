import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';;
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { DataserviceService } from "../../dataservice.service";
import { Router } from "@angular/router";
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
  //validuser = false;
  //@Output ValidUser : EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-inferrable-types
  validuser: boolean = true;
  constructor(
    private formbuilder: FormBuilder,
    private datasvc: DataserviceService,
    private router: Router,
    public afAuth: AngularFireAuth
  ) { }
  getloginurl = "../../../assets/samplejson/login.json";
  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      username: ["", Validators.compose([Validators.required])],
      password: ["", Validators.required],
    });
  }
  onSubmit() {
    const loginData = {
      username: this.loginform.controls.username.value,
      password: this.loginform.controls.password.value,
    };
    
    this.afAuth.auth.signInWithEmailAndPassword(loginData.username, loginData.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  }
}
