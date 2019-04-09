import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 urls = "http://localhost:3000/api/studentsignup";
 urlt = "http://localhost:3000/api/teachersignup";
  constructor(private http : HttpClient) { }

  storeStudent(data)
  {
    return this.http.post<any>(this.urls,data);
  }
  storeTeacher(data)
  {
    return this.http.post<any>(this.urlt,data);

  }



}
