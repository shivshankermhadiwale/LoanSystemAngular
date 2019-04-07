import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../Module/app-constants';
import { Customer } from '../Module/customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http: HttpClient) { }
  public getCustomerDetail():Observable<Customer>{
    return this.http.get<Customer>(AppConstants.API_ENDPOINT+'/customer/findById/1');
  }
  public getCustomerAllDetail():Observable<Customer>{
    return this.http.get<Customer>(AppConstants.API_ENDPOINT+'/customer/findAll');
  }
  public saveCustomerDetail(customer:Customer){
    return this.http.post<Customer>(AppConstants.API_ENDPOINT+'/customer/addNew',customer);
  }
  public saveCustContactPersionDetail(customer:Customer){
    return this.http.post<Customer>(AppConstants.API_ENDPOINT+'/customer/addContactPersions',customer);
  }
}
