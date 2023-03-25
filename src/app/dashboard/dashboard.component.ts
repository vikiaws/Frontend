import { Component, OnInit } from '@angular/core';
import { JobUploadService } from '../job-upload.service';
import { UserData } from '../user-data';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { table } from 'console';
import { DeletebeelineDialogComponent } from '../deletebeeline-dialog/deletebeeline-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user:any;
  cancelDialog:boolean=false;
  alertdata:any;
  beelineId ?:"";
  open="open";
  fulfilled="fulfilled";
  closed="closed";
  onhold="onhold";
  profile_Shared="profile shared";
  poc_Contacted="poc's contacted";
  pending="pending client interview";
  awaiting ="awaiting interview results";
  public details:UserData[]=[];
  products !: UserData[];
  constructor(private router:Router, private authService:JobUploadService, public matDialog:MatDialog) {
    if (this.router.getCurrentNavigation() != null && window.history.state.id) {
    }
    
   }
  ngOnInit(): void {
    this.user=localStorage.getItem('Result')
    this.authService.getData().subscribe((response:UserData[])=> {
     response.forEach(opr =>{
      let myData:UserData = new UserData("","","","","","","","","","","","","","","","","","","","","","",[],"","","");
      myData.id=opr.id;
      myData.beeline = opr.beeline;
      myData.beeLine_Request_Number= opr.beeLine_Request_Number;
      myData.job_description=opr.job_description;
      myData.department=opr.department;
      myData.no_of_positions=opr.no_of_positions;
      myData.priority=opr.priority;
      myData.cv_DeadLine=opr.cv_DeadLine;
      myData.current_Status=opr.current_Status;
      myData.name_of_candidate=opr.name_of_candidate;
      myData.next_step=opr.next_step;
      myData.billing_Rate=opr.billing_Rate;
      myData.hours_per_week=opr.hours_per_week;
      myData.dutch_Language=opr.dutch_Language;
      myData.location_relocation=opr.location_relocation;
      myData.contact_person=opr.contact_person;
      myData.experience=opr.experience;
      myData.status=opr.status;
      myData.date_request=opr.date_request;
      myData.prodapt_practice=opr.prodapt_practice;
      myData.prodapt_POC=opr.prodapt_POC;
      myData.client_Interview=opr.client_Interview;
      myData.location=opr.location;
      myData.key_skills=opr.key_skills;
     
     this.details.push(myData); 
     this.products = this.details.slice(0, 10);
   
    });
    })
    
  }

   


myData(myData: any) {
    throw new Error('Method not implemented.');
}
navToDetailedStatus(id: any){ 
    this.router.navigate(['addUser'],{state:{id: id}})
    console.log("Method Calling")
  }
navToCancel(id:any) {
    this.authService.cancelBeeline(id).subscribe(res => {
        this.authService.orderStatus = res;
        this.cancelDialog=false
        this.matDialog.open(DeletebeelineDialogComponent)
    }); 
    this.authService.cancelBeelineMail(id).subscribe(res => {
      this.authService.orderStatus = res;
  });  
  }
navToAmend(id:any){
    this.authService.getDetailedstatus(id).subscribe(res => {
      this.authService.orderStatus = res;
      this.router.navigate(['amend'])
    })
}
cancelBeeline(id:any){
     this.beelineId = id
    this.cancelDialog=true
}
navtoDashboard(){
    this.router.navigate(['dashboard'])
    this.cancelDialog=false
}
filterValue(table:any, event:any){
    table.filterGlobal(event.target.value, 'contains')
}
clear(table: any) {
      table.clear();
}
data1(table:any){
    var len=  table.length();
      console.log(len)
} 


}
