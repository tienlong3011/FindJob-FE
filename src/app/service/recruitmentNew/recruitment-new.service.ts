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

  getRecruitmentNewById(id: number): Observable<RecruitmentNew> {
    return this.http.get<RecruitmentNew>(`${this.apiServerUrl}/recruitment/${id}`);
  }

  createRecruitmentNew(recruitmentNew: RecruitmentNew): Observable<any>{
    return this.http.post(`${this.apiServerUrl}/recruitment`,recruitmentNew)
  }

  updateRecruitment(id: number, recruitment: RecruitmentNew): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/recruitment/${id}`, recruitment)
  }
}
