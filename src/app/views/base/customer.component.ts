import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Module/customer';
import { CustomerserviceService } from '../../Services/customerservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerserviceService,private router: Router, private route: ActivatedRoute) { }
  customer:Customer=new Customer();
   isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

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
  saveCustomerPersionDetail():void{
    console.log("Saving Customer Persional Detail");
    this.customerService.saveCustomerDetail(this.customer).subscribe(data => {
     this.customer=data;
      this.router.navigate(['dashboard']);
    })
  };

}
