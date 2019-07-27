import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Customer } from '../../Module/customer';
import { AppConstants } from '../../Module/app-constants';

@Component({
  templateUrl: 'customer-info.component.html'
})
export class CustomerInfoComponent implements OnInit {
  allCustomerList = [];
  constructor(private customerService: CustomerserviceService) { }
custInfo:Customer=new Customer();
conatactPersionList: Array<Customer> = [];
fileUrl;
  ngOnInit() {
    this.customerService.getCustomerAllDetail().subscribe(data => {
      this.allCustomerList=data;
     })

  }

  getCustomerDetail(custId){
    if(custId==""){
      alert("Please Select Customer")
    }else{
     this.customerService.getCustomerDetail(custId).subscribe(data => {
       this.custInfo=data;
       this.fileUrl= AppConstants.API_ENDPOINT+"/customer/downloadCustPDF/"+custId;
    
      })
      this.customerService.getCustomerContactPeoples(custId).subscribe(data => {
        this.conatactPersionList=data;
       
       })
    
    }
   
   }

  

}
