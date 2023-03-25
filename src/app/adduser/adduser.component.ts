import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,Validators} from '@angular/forms';import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { DialogComponent } from '../dialog/dialog.component';
import { JobUploadService, ProfileDetails } from '../job-upload.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  open="New";
  rejected="Profile Rejected";
  closed="Closed";
  onhold="Onhold";
  default?:"null";
  profile_Shared="Profile Shared";
  poc_Contacted="POC Contacted";
  pending="Pending Client Interview";
  awaiting ="Awaiting Interview Results";
  beeline:any;
  registrationforminfo: any;
  cancelDialog:boolean=false;;
  currentFileUpload ?: File;
  uploadedFile !: File;
  updatedFile !: File;
  updateFileUpload ?: File;
  updateDialog:boolean=false;
  addJobForm:any;
  file:any;
  displayMaximizable:any;
  profileStatus = [
    {name: 'Select'},
    { name: "Profile Selected " },
    { name: "Profile Shared" },
    {name: 'Profile Rejected'}
  ];
  prodaptPractice = [
    {name: 'Select'},
    {name: 'SF Practice'},
    {name: 'CAD'},
    { name: "NW Practice" },
    { name: "Infra Practice" },
    { name: "ASM Practice" },
    {name: 'COO-TOPS Practice'}
  ];
  dutchList = ["Yet to Schedule","Awaiting Results","Completed"];
  priorityList =["High" , "Medium ", "Low"];
  CurrentList =["Profile Selected", "Profile Shared", "Profile Rejected"]
  practiceList=["SF Practice" ,"CAD" ,"NW Practice" ,"Infra Practice","ASM Practice","COO-TOPS Practice"]
  items:any;
  orderStatus:any;
  newJobForm:any;
  editUser:any;
  expandedIndex:any;
  profileInfoForm:any=[];
  operatorList:any=[];
  showForm:boolean=false;
  editForm:boolean=false;
  beforeJd:boolean=true;
  afterJd:boolean=false;
  showOperatorModal = false;

  constructor(http:HttpClient,  private codBuilder: FormBuilder, private router:Router,private codService: JobUploadService ,private newJobFormBuilder: FormBuilder,private authService:JobUploadService, private matDialog:MatDialog) {
    if (this.router.getCurrentNavigation() != null && !!window.history.state.id) {
      this.codService.getDetailedstatus(window.history.state.id).subscribe(res => {
       
        this.codService.orderStatus = res;
        this.orderStatus = this.codService.orderStatus; 
      })
       } 
    }
  ngOnInit(): void {
    this.items = ['Stephen', 'Jhon William', 'Rajesh'];
    this.expandedIndex = 0;
    this.addJobForm = this.newJobFormBuilder.group(
      {
        beeline:new FormControl(),
        name_of_candidate:new FormControl(''),
        current_Status:new FormControl('',[Validators.required]),
        location_relocation:new FormControl('',[Validators.required]),
        client_Interview:new FormControl('',[Validators.required]),
        next_step:new FormControl('',[Validators.required]),
        comments:new FormControl('')
      },
    )}

    onEditSelected(event:any){
      let file = event.target.files[0];
      this.updatedFile =file;
    }
    onFileSelected(event:any) {
      let file = event.target.files[0];
      this.uploadedFile =file;
    }
    onUpdateClose(){
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
  navToHome() {
    this.router.navigate(['dashboard'])
  }
  addUser(){
    this.showForm=true;
  }
  navToProfile(){
    this.showForm=false;
  }
  navToaddJobForm(){
    this.addJobForm.controls['beeline'].setValue(this.orderStatus.id);
    let profileDetails :ProfileDetails={
         beeline :this.addJobForm.get('beeline').value,
         name_of_candidate :this.addJobForm.get('name_of_candidate').value,
         current_Status :this.addJobForm.get('current_Status').value,
         next_step :this.addJobForm.get('next_step').value,
         location_relocation :this.addJobForm.get('location_relocation').value,
         client_Interview:this.addJobForm.get('client_Interview').value,
         comments :this.addJobForm.get('comments').value,
    }
    this.currentFileUpload =this.uploadedFile
    if(this.addJobForm.valid){
      this.authService.addJobProfile(profileDetails,this.currentFileUpload).subscribe(result=>{
      this.showForm=false;
      this.matDialog.open(DialogComponent)
    })
    this.authService.ProfileEmail(profileDetails,this.currentFileUpload).subscribe(result=>{
     
    })
  }
  else{
   alert("Service is not working")
  }
}
cancelJob(id:any) {
  this.cancelDialog=true;
}
cancelProfile(id:any){
  this.authService.cancelJob(id).subscribe(res => {
    this.authService.orderStatus = res;
    this.matDialog.open(DeleteDialogComponent)

});
this.authService.cancelProfileMail(id).subscribe(res => {
  this.authService.orderStatus = res;
});
}
editJob(id:any){
  this.authService.getProfile(id).subscribe(res => {
    
    this.editUser=res;
    this.editForm=true
  })
}
navToEditProfile(){
  this.editForm=false;
}
captureInput(event:any){
  this.editUser[event.target.id] = event.target.value;
 }
 captureDropdownValue(event:any,id:any,uniqueName:any){
  this.editUser[id] =  event.value[uniqueName];
 }
navToEditJobForm(id:any){
  this.updateFileUpload =this.updatedFile
  this.authService.amendJob(this.editUser,this.updatedFile).subscribe(res => {
    if(!!res && !!res.data) {
         
    }
  })
  this.authService.updateProfileEmail(this.editUser,this.updatedFile).subscribe(res => {
    if(!!res && !!res.data) {
       
    }
  })
  this.matDialog.open(UpdateDialogComponent)
}
onClose(){
  this.cancelDialog=false;
}
}


