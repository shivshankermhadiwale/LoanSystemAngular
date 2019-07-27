import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import {PopoversComponent} from './popovers.component';
import {ProgressComponent} from './progress.component';
import {TooltipsComponent} from './tooltips.component';
import { CustomerComponent } from './customer.component';
import { LoanAccountComponent } from './loan-account.component';
import { LoanEMIComponent } from './loan-emi.component';
import { CustomerInfoComponent } from './customer-info.component';
import { LoanDetailComponent } from './loan-detail.component';
import { CloseLoanComponent } from './close-loan.component';
import { LoanRepoComponent } from './loan-repo.component';
import { LoanPaymentComponent } from './loan-payment.component';
import { LoanPenltyComponent } from './loan-penlty.component';
import { LoanCollectionReportComponent } from './loan-collection-report.component';
import { ExpenseTypesComponent } from './expense-types.component';
import { ExpenseDetailComponent } from './expense-detail.component';
import { ExpenseReportComponent } from './expense-report.component';
import { DisbursedLoansComponent } from './disbursed-loans.component';
import { FDAccountComponent } from './fdaccount.component';
import { FDAccountViewComponent } from './fdaccount-view.component';
import { FDAccountCloseComponent } from './fdaccount-close.component';
import { FDAccountReportComponent } from './fdaccount-report.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      
      {
        path: 'fdaccount',
        component:FDAccountComponent,
        data: {
          title: 'fdaccount'
        }
      },
      {
        path: 'fdaccountview',
        component:FDAccountViewComponent,
        data: {
          title: 'fdaccountview'
        }
      },
      {
        path: 'fdaccountclose',
        component:FDAccountCloseComponent,
        data: {
          title: 'fdaccountview'
        }
      },
      {
        path: 'fdaccountreport',
        component:FDAccountReportComponent,
        data: {
          title: 'fdaccountview'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'customer',
        component: CustomerComponent,
        data: {
          title: 'Customer'
        }
      },
      {
        path: 'customer-info',
        component: CustomerInfoComponent,
        data: {
          title: 'Customer Information'
        }
      },
      {
        path: 'loan-account',
        component: LoanAccountComponent,
        data: {
          title: 'Loan Account'
        }
      },
      {
        path: 'loan-payment',
        component: LoanPaymentComponent,
        data: {
          title: 'Loan Payment'
        }
      },
      {
        path: 'loan-emi',
        component: LoanEMIComponent,
        data: {
          title: 'Loan EMI'
        }
      },
      {
        path: 'disbursed-loans',
        component: DisbursedLoansComponent,
        data: {
          title: 'Disbursed Loans'
        }
      },


      {
        path: 'loan-detail',
        component: LoanDetailComponent,
        data: {
          title: 'Loan Detail'
        }
      },
      {
        path: 'close-loan',
        component: CloseLoanComponent,
        data: {
          title: 'Close Loan'
        }
      },
      {
        path: 'loan-repo',
        component:LoanRepoComponent,
        data: {
          title: 'Loan Report'
        }
      },

      {
        path: 'loan-penlty',
        component:LoanPenltyComponent,
        data: {
          title: 'Add Penlty'
        }
      },
      {
        path: 'loan-collection-report',
        component:LoanCollectionReportComponent,
        data: {
          title: 'Loan Collection Report'
        }
      },
      {
        path: 'expense-types',
        component:ExpenseTypesComponent,
        data: {
          title: 'Expense Types'
        }
      },

      {
        path: 'expense-detail',
        component:ExpenseDetailComponent,
        data: {
          title: 'Expenses'
        }
      },
      {
        path: 'expense-report',
        component:ExpenseReportComponent,
        data: {
          title: 'Expenses'
        }
      },
    

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
