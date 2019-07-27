import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../../Services/expense-service.service';
import { Expense } from '../../Module/expense';
import { FormGroup } from '@angular/forms';

@Component({
 
  templateUrl: './expense-detail.component.html'
  
})
export class ExpenseDetailComponent implements OnInit {
  expenseTypesList: Array<Expense> = [];
  expenseslst: Array<Expense> = [];
  validationFlag:boolean=true;
  expense:Expense=new Expense();
  expenseName:string;
  constructor(private expenseService: ExpenseServiceService) { }
  ngOnInit() {
    this.expenseService.getExpenseTypes().subscribe(data => {
      this.expenseTypesList=data;
     })
  }
  selectchange(args){ 
    this.expenseName = args.target.options[args.target.selectedIndex].text; 
  } 
  addExpenseDtls(expenseDetails):void{
    this.validationFlag=true;
    this.expense=expenseDetails;
    this.expense.expenseType=this.expenseName;
    this.checkValidation();
    if(this.validationFlag){
      this.expenseService.addExpenseDtls(this.expense).subscribe(data => {
      this.expenseslst.push(data);
      alert("Successfully Added");
      })
    }
   
  };
  checkValidation(){
    if(this.expense.expenseTypeId==undefined){
      alert("Please Select Expense Type");
      this.validationFlag= false;
    }
    if(this.expense.amount==undefined){
      alert("Please Enter Amount");
      this.validationFlag= false;
    }
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
