import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs'

@Injectable()

export class WebService {
  constructor(private http: HttpClient) {}
  BASE_URL = 'http://localhost:63145/api'
  getMessages() {
    return this.http.get(`${this.BASE_URL}/messages`).toPromise()
  }

  postMessage(message:any) {
    console.log(message)
    // return this.http.post(this.BASE_URL + '/messages', message).toPromise();
    return this.http.post(`${this.BASE_URL}/messages`, message).toPromise()
  }
}



