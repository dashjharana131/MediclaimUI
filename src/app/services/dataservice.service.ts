import { Injectable } from '@angular/core';
import { Claim } from '../models/claim';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  url: string = 'http://10.117.189.207:9393/medi-claim/claims/';
  firstUrl: string = 'http://10.117.189.207:9393/medi-claim/hospitals';
  secondUrl: string = 'http://10.117.189.207:9393/medi-claim/hospitals/disease';

  constructor(private http: HttpClient, private router: Router) { }

  getClaim(claimId): Observable<Claim[]> {
    return this.http.get<Claim[]>(this.url + '?claimId=' + claimId);
  }

  getHospitalList() {
    return this.http.get(this.firstUrl);
  }

  getDiseaseList() {
    return this.http.get(this.secondUrl);
  }

  getUser() {

  }
}
