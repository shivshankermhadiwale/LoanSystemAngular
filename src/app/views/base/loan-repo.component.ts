import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../../Module/payment-detail';
import { LoanRepo } from '../../Module/loan-repo';
import { LoanserviceService } from '../../Services/loanservice.service';
import { AppConstants } from '../../Module/app-constants';

@Component({
  templateUrl: 'loan-repo.component.html',
  
})
export class LoanRepoComponent implements OnInit {
  loanRepoDetails: Array<LoanRepo> = [];
  fileUrl;
  constructor(private loanservice: LoanserviceService) { }

  ngOnInit() {
  }

  onStatusChange(loanStatus){
    this.fileUrl= AppConstants.API_ENDPOINT+"/Loan/download-loan-accounts/"+loanStatus;
    this.loanservice.getLoanDetailByStatus(loanStatus).subscribe(data => {
      
      this.loanRepoDetails=data;
     
     
     })
}

}
