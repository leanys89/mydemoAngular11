import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Filter } from '../models/filter';

@Injectable({
  providedIn: 'root'
})

export class TransactionServiceService {
  
  constructor(private http: HttpClient, private authService: AuthService) {  }


  getAllTransaction():Observable<any>{
    return this.http.post(environment.ApiBaseUrl + 'transactions', {}, {headers: this.authService.getAuthHeaders()});
  }

  getTransaction(id:string | null):Observable<any>{
      const payload = new HttpParams()
      .set('id', id ?? "")
      return this.http.post(environment.ApiBaseUrl + 'transaction', payload, {headers: this.authService.getAuthHeaders()});
  }

  filterTransaction(filter:Filter):Observable<any>{
    const payload = filter;
    return this.http.post(environment.ApiBaseUrl + 'filter/transaction', payload, {headers: this.authService.getAuthHeaders()});
}



}


