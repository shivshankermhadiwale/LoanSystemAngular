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
  public getCustomerDetail(custId):Observable<Customer>{
    return this.http.get<Customer>(AppConstants.API_ENDPOINT+'/customer/findById/'+custId);
  }
  public getCustomerAllDetail():Observable<Customer[]>{
    return this.http.get<Customer[]>(AppConstants.API_ENDPOINT+'/customer/findAll');
  }
  public saveCustomerDetail(customer:Customer){
    return this.http.post<Customer>(AppConstants.API_ENDPOINT+'/customer/addNew',customer);
  }
  public saveCustContactPersionDetail(customer:Customer){
    return this.http.post<Customer>(AppConstants.API_ENDPOINT+'/customer/addContactPersions',customer);
  }
  public getCustomerContactPeoples(custId):Observable<Customer[]>{
    return this.http.get<Customer[]>(AppConstants.API_ENDPOINT+'/customer/findContactPersionByCustId/'+custId);
  }

  public downloadCustPdf(custId){
    return this.http.get(AppConstants.API_ENDPOINT+'/customer/downloadCustPDF/'+custId);
  }
}
