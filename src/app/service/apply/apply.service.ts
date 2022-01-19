import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cv} from '../../model/cv';
import {Observable} from 'rxjs';
import {Apply} from '../../model/apply';
import {environment} from '../../../environments/environment';
import {ChangeStatusApply} from '../../model/changeStatusApply';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  createCV(apply: Apply): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/applies`, apply)
  }
  // showAllForCompanyID(id: number): Observable<any []>{
  //   return this.http.get<any []>(`${this.apiServerUrl}/applies/findAllByCompanyID/${id}`)
  // }
  pageCompany(request,id){
    const params = request;
    return this.http.get(`${this.apiServerUrl}/applies/findAllByCompanyID/${id}`,{params})
  }

  apply(changeStatusApply: ChangeStatusApply): Observable<any>{
    return this.http.post<any>("http://localhost:8080/applies/changeStatusApply",changeStatusApply);
  }

}
