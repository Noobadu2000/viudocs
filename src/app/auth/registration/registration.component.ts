import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loginInvalid = false;

  regform: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regform = this.formbuilder.group({
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      emailid: ['', Validators.compose([Validators.required])],
      phonenumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required],
      cnfpassword: ['', Validators.required],
    });
  }

}
