import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Module/customer';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';

@Component({
  templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerserviceService,private router: Router, private route: ActivatedRoute) { }
  customer:Customer=new Customer();
   isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';
  custId:BigInteger;
  conatactPersionList: Array<Customer> = [];

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }


  ngOnInit() {
  }
  saveCustomerPersionDetail(customer):void{
    console.log("Saving Customer Persional Detail" +JSON.stringify(customer));
    this.customerService.saveCustomerDetail(customer).subscribe(data => {
     this.customer=data;
     this.custId=this.customer.custId;
  
    
    })
  };
  saveCustContactPersionDetail(custContactPersion):void{
    console.log("test custId" +this.custId);
    this.customer=custContactPersion;
    this.customer.custId=this.custId;
    console.log("Saving Customer Persional Detail" +JSON.stringify(this.customer));
    this.customerService.saveCustContactPersionDetail(custContactPersion).subscribe(data => {
     this.customer=data;
     this.conatactPersionList.push(this.customer);
     console.log("size "+this.conatactPersionList.length);
    
    })
  };

}
