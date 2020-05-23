import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-verfierlogin',
  templateUrl: './verfierlogin.component.html',
  styleUrls: ['./verfierlogin.component.css']
})
export class VerfierloginComponent implements OnInit {
  loginform: FormGroup;
  loginInvalid: false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      username : ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
  onSubmit(){
    if (this.loginform.invalid) {
      return;
    }
    const loginData = {
      username: this.loginform.controls.username.value,
      password: this.loginform.controls.password.value
    };
    console.log(loginData);
}
}
