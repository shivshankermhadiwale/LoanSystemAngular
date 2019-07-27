import { Component, OnInit } from '@angular/core';
import { Loandetail } from '../../Module/loandetail';
import { LoanserviceService } from '../../Services/loanservice.service';

@Component({
  
  templateUrl: './loan-payment.component.html',
 
})
export class LoanPaymentComponent implements OnInit {
  loanDetail:Loandetail=new Loandetail();
  disburseAmt:number;
  constructor(private loanservice: LoanserviceService) { }

  ngOnInit() {
  }
  getAccountDetail(loanId){
    if(loanId==""){
      alert("Please enter loan id")
    }else{
     this.loanservice.getLoanDetailByLoanId(loanId).subscribe(data => {
       this.loanDetail=data;
       if(this.loanDetail.disburseAmt!=null){
        this.disburseAmt=this.loanDetail.loanAmt-this.loanDetail.disburseAmt;
       }else{
        this.disburseAmt=this.loanDetail.loanAmt;
       }
      })
    }
   
   }

   makeLoanPayment(paymentDetail){
   this.loanDetail.paymentMode=paymentDetail.paymentMode;
   this.loanDetail.disburseAmt=this.disburseAmt;
     this.loanservice.makeLoanPayment(this.loanDetail).subscribe(data => {
       this.loanDetail=data;
      alert("Payment Done Successfully");
    })
  }
   

}
