import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {Http,Headers} from '@angular/http';
@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  firebase(){
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

  }

  

  validuser = new Subject<string>();
  constructor(private http: Http) { }
  getData(url): Observable<any> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-methods', 'POST,GET,OPTIONS,PUT,DELETE');
    headers.append('Access-Control-Allow-origin', '*');
    return this.http.get(url).pipe(map((response: any) => response.json()));
  }

  postloginData(login) {
      this.validuser.next(login);
  }

  // tslint:disable-next-line: whitespace
  getLoginData():Observable<any>{
    return this.validuser.asObservable();
  }
}

