import { Component, OnInit } from '@angular/core';
import { Expense } from '../../Module/expense';
import { ExpenseServiceService } from '../../Services/expense-service.service';

@Component({

  templateUrl: './expense-report.component.html'
 
})
export class ExpenseReportComponent implements OnInit {
  expenseslst: Array<Expense> = [];
  validationFlag:boolean=true;
  expense:Expense=new Expense();
 
  constructor(private expenseService: ExpenseServiceService) { }

  ngOnInit() {
  }
  getExpenseDtls(expenseDetails):void{
    this.validationFlag=true;
    this.expense=expenseDetails;
    this.checkValidation();
    if(this.validationFlag){
      this.expenseService.getExpenseDtlsByDate(expenseDetails).subscribe(data => {
      this.expenseslst=data;
      })
    }
   
  };

  checkValidation(){
    if(this.expense.fromDate==undefined){
      alert("Please Enter From Date ");
      this.validationFlag= false;
    }
    if(this.expense.toDate==undefined){
      alert("Please Enter To Date");
      this.validationFlag=false;
    }
  }
  

}
