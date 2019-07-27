import { Component, OnInit } from '@angular/core';
import { FDAccount } from '../../Module/fdaccount';
import { FDServiceService } from '../../Services/fdservice.service';

@Component({
  
  templateUrl: './fdaccount-report.component.html',
 
})
export class FDAccountReportComponent implements OnInit {
  fdReports: Array<FDAccount> = [];
  constructor(private fdservice: FDServiceService) { }

  ngOnInit() {
  }

  onStatusChange(fdStatus){
    this.fdservice.getFdsByStatus(fdStatus).subscribe(data => {
      this.fdReports=data;
     })
}
}
