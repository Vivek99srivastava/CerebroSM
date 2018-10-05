import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://10.5.74.51:8080/getprojects';

  constructor(private http: HttpClient) { }

  createFeature(feature: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, feature);
  }

  getApplicationList(): Observable<any>  {

   this.http.get(this.baseUrl).subscribe(value => console.log(value)
 
    );
    return;
  }
}

