import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchqService {
  urls = "http://localhost:3000/api/fetchdata";
  constructor(private http :HttpClient) { }

  fetchdata(data)
  {
    return this.http.post<any>(this.urls,data);
  }
}
