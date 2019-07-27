import { Component, OnInit } from '@angular/core';
import { FDAccount } from '../../Module/fdaccount';
import { FDServiceService } from '../../Services/fdservice.service';
import { AppConstants } from '../../Module/app-constants';

@Component({
 
  templateUrl: './fdaccount-view.component.html',
 
})
export class FDAccountViewComponent implements OnInit {
  fdAccountDtls:FDAccount=new FDAccount();
  fileUrl;
  constructor(private fdService: FDServiceService) { }

  ngOnInit() {
  }

  getAccountDetail(fdId){
    if(fdId==""){
      alert("Please enter FD Account id")
    }else{
     this.fdService.getFDDetailByFDId(fdId).subscribe(data => {
       this.fdAccountDtls=data;
       this.fileUrl= AppConstants.API_ENDPOINT+"/FD/downloadFDPDF/"+fdId;
      })
    }
   
   }

}
