import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { NgModule } from '@angular/core';
import { environment} from './../environments/environment';
import {MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './UIComponents/layout/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './UIComponents/layout/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { VerfierloginComponent } from './auth/verfierlogin/verfierlogin.component';
import { AboutusComponent } from './UIComponents/layout/aboutus/aboutus.component';
import { ContactusComponent } from './UIComponents/layout/contactus/contactus.component';
import { HttpModule } from '@angular/http';
import { MaindashboardComponent } from './UIComponents/main/maindashboard/maindashboard.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import { UploaddocumentsComponent } from './UIComponents/main/uploaddocuments/uploaddocuments.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'user_login', component: LoginComponent},
  {path: 'verfier_login', component: VerfierloginComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path:'Registration', component: RegistrationComponent},
  {path : 'upload_docs', component: UploaddocumentsComponent}
];
const firebaseConfig = {
  apiKey: "AIzaSyDJGIsBVFnPgwSvkdZUS6OE1Bl7f416yF0",
  authDomain: "viudocs-8c0d2.firebaseapp.com",
  databaseURL: "https://viudocs-8c0d2.firebaseio.com",
  projectId: "viudocs-8c0d2",
  storageBucket: "viudocs-8c0d2.appspot.com",
  messagingSenderId: "746348610584",
  appId: "1:746348610584:web:306609361b980024376f6d",
  measurementId: "G-REDKHXLQC9"
};

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    MaindashboardComponent,
    UploaddocumentsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    MatSidenavModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    HttpModule,
    MatCardModule,
     RouterModule.forChild(routes)
  ],

  providers: [
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
