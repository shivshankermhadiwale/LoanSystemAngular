import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from '../../Services/loanservice.service';
import { LoanCollectionSummary } from '../../Module/loan-collection-summary';

@Component({
  templateUrl: './loan-collection-report.component.html',
})
export class LoanCollectionReportComponent implements OnInit {
  loanCollections: Array<LoanCollectionSummary> = [];
  loanCollRepo:LoanCollectionSummary=new LoanCollectionSummary();
  constructor(private loanservice: LoanserviceService) { }

  ngOnInit() {
  }

  getCollectionDetail(collectionDates){
  this.loanCollRepo=collectionDates;
     this.loanservice.getLoanCollectionsByDate(this.loanCollRepo.fromDate,this.loanCollRepo.toDate).subscribe(data => {
        this.loanCollections=data;
       
      })
    
   }
   
  }


