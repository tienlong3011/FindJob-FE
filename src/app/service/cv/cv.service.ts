import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Cv} from '../../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CVService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  createCV(cv: Cv): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/CV`, cv)
  }

  findByUserId(id: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/CV/user/${id}`)
  }
}
