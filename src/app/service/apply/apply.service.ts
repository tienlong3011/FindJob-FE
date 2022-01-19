import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cv} from '../../model/cv';
import {Observable} from 'rxjs';
import {Apply} from '../../model/apply';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  createCV(apply: Apply): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/applies`, apply)
  }

  pageApply(nextPage,id : number){
    const params = nextPage;
    return  this.http.get(`${this.apiServerUrl}/applies/showAllApply/${id}`,{params})
  }
}
