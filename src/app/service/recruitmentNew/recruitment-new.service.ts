import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentNewService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  createRecruitmentNew(recruitmentNew: RecruitmentNew): Observable<any>{
    return this.http.post(`${this.apiServerUrl}/recruitment`,recruitmentNew)
  }


  showAllListRecruitmentNew(id:number): Observable<any>{
    return this.http.get(`${this.apiServerUrl}/recruitment/showAll/${id}`)
  }


  deleteRecruitmentNewById(id: number): Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/recruitment/${id}`);
  }
}
