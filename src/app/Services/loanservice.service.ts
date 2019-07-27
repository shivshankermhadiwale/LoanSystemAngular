import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loandetail } from '../Module/loandetail';
import { AppConstants } from '../Module/app-constants';
import { Observable } from 'rxjs';
import { PaymentDetail } from '../Module/payment-detail';
import { LoanRepo } from '../Module/loan-repo';
import { Dashboard } from '../Module/dashboard';
import { PendingLoanPayments } from '../Module/pending-loan-payments';
import { LoanCollectionSummary } from '../Module/loan-collection-summary';
import { LoanPenalty } from '../Module/loan-penalty';

@Injectable({
  providedIn: 'root'
})
export class LoanserviceService {

  constructor(private http: HttpClient) { }

  public saveLoanDetail(loandetail:Loandetail){
    return this.http.post<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/createLoanAccount',loandetail);
  }
  public makeLoanPayment(loandetail:Loandetail){
    return this.http.post<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/makeLoanPayment',loandetail);
  }
  public getLoanDetailByCustIdAndStatus(custId){
    return this.http.get<Loandetail[]>(AppConstants.API_ENDPOINT+'/Loan/getLoanDetailByCustId/'+custId+'/Opened');
  }

  public getLoanDetailByLoanId(loanId){
    return this.http.get<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/getLoanDetailByLoanId/'+loanId);
  }

  public addCustomerPaymet(payment:PaymentDetail){
    return this.http.post<PaymentDetail>(AppConstants.API_ENDPOINT+'/Loan/addPayment',payment);
  }

  public closeLoanAccount(loandetail:Loandetail){
    return this.http.post<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/closeLoanAccount',loandetail);
  }

  public getLoanDetailByStatus(loanStatus){
    return this.http.get<LoanRepo[]>(AppConstants.API_ENDPOINT+'/Loan/getLoanDetailByStatus/'+loanStatus);
  }
  public getDashboard(){
    return this.http.get<Dashboard>(AppConstants.API_ENDPOINT+'/dashboard/getData');
  }
  public getPendingLoanPayments(){
    return this.http.get<Loandetail[]>(AppConstants.API_ENDPOINT+'/dashboard/getPendingLoanPayments');
  }
  public getTodayCollectionSummary(){
    return this.http.get<LoanCollectionSummary[]>(AppConstants.API_ENDPOINT+'/Loan/getTodayCollectionSummary');
  }
  public getLoanPenltyByLoanId(loanAccountNo){
    return this.http.get<LoanPenalty[]>(AppConstants.API_ENDPOINT+'/Loan/get-penalty-by-loanAccountId/'+loanAccountNo);
  }
  public addLoanPenlty(loanPenlty:LoanPenalty){
    return this.http.post<LoanPenalty>(AppConstants.API_ENDPOINT+'/Loan/add-loan-penalty',loanPenlty);
  }
  public getDisburseLoansByStatus(loanStatus){
    return this.http.get<LoanRepo[]>(AppConstants.API_ENDPOINT+'/Loan/get-loan-disbursed-by-loan-status/'+loanStatus);
  }

  public getLoanCollectionsByDate(fromDate:string,toDate:string){
    return this.http.get<LoanCollectionSummary[]>(AppConstants.API_ENDPOINT+'/Loan/get-payment-collection-by-date/'+fromDate+"/"+toDate);
  }
}
