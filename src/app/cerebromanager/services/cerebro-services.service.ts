import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Feature } from '../models/feature';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CerebroServicesService {

  private featureUrl = 'http://localhost:8080/api/feature/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

   //create feature
  //  createFeature(feature: Feature): Promise<Feature> {
  //   return this.http
  //     .post(this.featureUrl, JSON.stringify(feature), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json() as Feature)
  //     .catch(this.handleError);
  // }
  createFeature(feature: Feature): Observable<Object> {
    return this.http.post(`${this.featureUrl}` + `/feature`, feature);
  }

  //error handler
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
