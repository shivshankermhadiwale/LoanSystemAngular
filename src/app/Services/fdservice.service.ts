import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FDAccount } from '../Module/fdaccount';
import { AppConstants } from '../Module/app-constants';
import { FDInterestDtl } from '../Module/fdinterest-dtl';

@Injectable({
  providedIn: 'root'
})
export class FDServiceService {

  constructor(private http: HttpClient) { }
  
  public createNewFD(fdaccount:FDAccount){
    return this.http.post<FDAccount>(AppConstants.API_ENDPOINT+'/FD/new-fd',fdaccount);
  }
  public getFDDetailByFDId(fdId){
    return this.http.get<FDAccount>(AppConstants.API_ENDPOINT+'/FD/find-fd-by-accountid/'+fdId);
  }

  public closeFD(fdaccount:FDAccount){
    return this.http.post<FDAccount>(AppConstants.API_ENDPOINT+'/FD/close-fd',fdaccount);
  }

  public getFdsByStatus(fdStatus){
    return this.http.get<FDAccount[]>(AppConstants.API_ENDPOINT+'/FD/get-fds-by-status/'+fdStatus);
  }
  public getCustFDLst(custId){
    return this.http.get<FDAccount[]>(AppConstants.API_ENDPOINT+'/FD/get-cust-fd-lst/'+custId);
  }
  public payInterestAmt(fdinterest:FDInterestDtl){
    return this.http.post<FDInterestDtl>(AppConstants.API_ENDPOINT+'/FD/pay-fd-intersamt',fdinterest);
  }

}
