import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterserviceService {
  api_url = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  getTimeline(){
    return this.http.get(this.api_url+'/home_timeline', );
  }
}
