import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Customer } from '../../Module/customer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'loan-account.component.html'
})
export class LoanAccountComponent  {
  
  constructor(private customerService: CustomerserviceService,private router: Router, private route: ActivatedRoute) { }
  customer:Customer=new Customer();
   isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';
  allCustomerList: Array<Customer> = [];

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
    this.customerService.getCustomerAllDetail().subscribe(data => {
      this.customer=data;
      this.allCustomerList.push(this.customer);
     
     
     })
   };
  

}
