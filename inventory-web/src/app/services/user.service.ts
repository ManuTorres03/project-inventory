import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // @ts-ignore
  selectedUser: any;

  constructor(private http: HttpClient) {
  }

  public getUsers() {
    return this.http.get("http://localhost:8080/users/list")
  }

}
