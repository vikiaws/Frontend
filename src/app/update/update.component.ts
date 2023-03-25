import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JobUploadService } from '../job-upload.service';
import { UpdatebeelineDialogComponent } from '../updatebeeline-dialog/updatebeeline-dialog.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  orderStatus:any;
  amendJobRequest: any= {};
  amendedJobRefId: any;
  currentFileUpload ?: File;
  uploadedFile !: File;
  beforeJd:boolean=true;
  afterJd:boolean=false;
  updateDialog:boolean=false;;
  default?:null;
  dutchList = ["Yes","No"];
  priorityList1 =["High" , "Medium ", "Low"];
  CurrentList =["Open", "Fulfilled", "Closed", "Onhold","Profile Shared", "POC's Contacted", "Pending Client Interview","Awaiting Interview Results"]
  practiceList=["SBU", "SF Practice" ,"CAD" ,"NS" ,"Infra","ASM","COO-TOPS"]
  priorityList = [
    {name: 'Select'},
    { name: "High" },
    { name: "Medium" },
    { name: "Low" },
  ];
  status = [
    {name: 'Select'},
    {name: 'Open'},
    { name: "Fulfilled" },
    { name: "Lost" },
    { name: "Closed" },
  ];
  constructor(private codBuilder: FormBuilder, private router: Router,private authService: JobUploadService,private matDialog:MatDialog) {
    this.orderStatus = this.authService.orderStatus;

   }

  ngOnInit(): void {

  }
  navToHome() {
    this.router.navigate(['dashboard'])
  }
  captureInput(event:any){
    this.orderStatus[event.target.id] = event.target.value;
   }
   onFileSelected(event:any) {
    let file = event.target.files[0];
    this.uploadedFile =file;

  }
  onClose(){
    this.updateDialog=false;
    this.beforeJd=true;
    this.afterJd=false;

  }
  changeJD(){
    this.updateDialog=true;

  }
  updateJD(){
    this.updateDialog=false;
    this.afterJd=true;
    this.beforeJd=false;
  }
  captureDropdownValue(event:any,id:any,uniqueName:any){
    this.orderStatus[id] =  event.value[uniqueName];
   }
   amendOrder(id:any){
    this.currentFileUpload =this.uploadedFile
   
    this.orderStatus.id = id;
    
    this.authService.amendBeeline(this.orderStatus,this.currentFileUpload).subscribe(res => {
      if(!!res && !!res.data) {
      }
    
      this.matDialog.open(UpdatebeelineDialogComponent)
    })
    this.authService.amendBeelineEmail(this.orderStatus,this.currentFileUpload).subscribe(res => {
      if(!!res && !!res.data) {
      } })
   }

}
