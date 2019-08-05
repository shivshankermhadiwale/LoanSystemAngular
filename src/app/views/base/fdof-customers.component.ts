import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { FDAccount } from '../../Module/fdaccount';
import { FDServiceService } from '../../Services/fdservice.service';

@Component({
  templateUrl: './fdof-customers.component.html',
})
export class FDOfCustomersComponent implements OnInit {
  allCustomerList = [];
  fdAccount:FDAccount=new FDAccount();
  fdReports: Array<FDAccount> = [];
  constructor(private customerService:CustomerserviceService,private fdService:FDServiceService) { }

  ngOnInit() {
    this.customerService.getCustomerAllDetail().subscribe(data => {
      this.allCustomerList=data;
     })
  }
  onStatusChange(custId){
    this.fdService.getCustFDLst(custId).subscribe(data => {
      this.fdReports=data;
     })
}

}
