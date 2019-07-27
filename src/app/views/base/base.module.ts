// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';


// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { CustomerComponent } from './customer.component';
import { FDAccountComponent } from './fdaccount.component';
import { CustomerInfoComponent } from './customer-info.component';
import { LoanAccountComponent } from './loan-account.component';
import { LoanPaymentComponent } from './loan-payment.component';
import { LoanEMIComponent } from './loan-emi.component';
import { DisbursedLoansComponent } from './disbursed-loans.component';
import { LoanDetailComponent } from './loan-detail.component';
import { CloseLoanComponent } from './close-loan.component';
import { LoanRepoComponent } from './loan-repo.component';
import { LoanPenltyComponent } from './loan-penlty.component';
import { LoanCollectionReportComponent } from './loan-collection-report.component';
import { ExpenseTypesComponent } from './expense-types.component';
import { ExpenseDetailComponent } from './expense-detail.component';
import { ExpenseReportComponent } from './expense-report.component';
import { FDAccountViewComponent } from './fdaccount-view.component';
import { FDAccountCloseComponent } from './fdaccount-close.component';
import { FDAccountReportComponent } from './fdaccount-report.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    CardsComponent,
    FormsComponent,
    CustomerComponent,
    FDAccountComponent,
    FDAccountViewComponent,
    FDAccountCloseComponent,
    FDAccountReportComponent,
    CustomerInfoComponent,
    LoanAccountComponent,
    LoanPaymentComponent,
    LoanEMIComponent,
    DisbursedLoansComponent,
    LoanDetailComponent,
    CloseLoanComponent,
    LoanRepoComponent,
    LoanPenltyComponent,
    LoanCollectionReportComponent,
    ExpenseTypesComponent,
    ExpenseDetailComponent,
    ExpenseReportComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent,
    FDAccountViewComponent,
    FDAccountCloseComponent,
    FDAccountReportComponent
  ]
})
export class BaseModule { }
