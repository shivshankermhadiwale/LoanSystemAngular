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
    return this.http.post<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/new',loandetail);
  }
  public getLoanDetailByLoanId(loanId){
    return this.http.get<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/find/'+loanId);
  }
  public getLoanDetailByCustIdAndStatus(custId){
    return this.http.get<Loandetail[]>(AppConstants.API_ENDPOINT+'/Loan/find/'+custId+'/Opened');
  }
  public getLoanDetailByStatus(loanStatus){
    return this.http.get<LoanRepo[]>(AppConstants.API_ENDPOINT+'/Loan/find-all/'+loanStatus);
  }
  public closeLoanAccount(loandetail:Loandetail){
    return this.http.post<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/close',loandetail);
  }
  public makeLoanPayment(loandetail:Loandetail){
    return this.http.post<Loandetail>(AppConstants.API_ENDPOINT+'/Loan/disburse',loandetail);
  }
  public getDisburseLoansByStatus(loanStatus){
    return this.http.get<LoanRepo[]>(AppConstants.API_ENDPOINT+'/Loan/find-disbursement/'+loanStatus);
  }
  public getPendingLoanPayments(){
    return this.http.get<Loandetail[]>(AppConstants.API_ENDPOINT+'/Loan/find-pending-disbursements');
  }
  public addCustomerPaymet(payment:PaymentDetail){
    return this.http.post<PaymentDetail>(AppConstants.API_ENDPOINT+'/Loan/add-emi',payment);
  }
  public getLoanCollectionsByDate(fromDate:string,toDate:string){
    return this.http.get<LoanCollectionSummary[]>(AppConstants.API_ENDPOINT+'/Loan/get-emi/'+fromDate+"/"+toDate);
  }
  public getTodayCollectionSummary(){
    return this.http.get<LoanCollectionSummary[]>(AppConstants.API_ENDPOINT+'/Loan/get-daily-paid-emi');
  }
  public getLoanPenltyByLoanId(loanAccountNo){
    return this.http.get<LoanPenalty[]>(AppConstants.API_ENDPOINT+'/Loan/get-penalty/'+loanAccountNo);
  }
  public addLoanPenlty(loanPenlty:LoanPenalty){
    return this.http.post<LoanPenalty>(AppConstants.API_ENDPOINT+'/Loan/add-penalty',loanPenlty);
  }

  public getDashboard(){
    return this.http.get<Dashboard>(AppConstants.API_ENDPOINT+'/Loan/dashboard');
  }
 
  
 
 

  
}
