import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BeelineDailogComponent } from '../beeline-dailog/beeline-dailog.component';
import { JobUploadService, UserDetails } from '../job-upload.service';


@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.scss']
})
export class NewjobComponent implements OnInit {
  fileData:boolean=false;
  fileName = '';
  registrationforminfo: any;
  newJobForm: any;
  displayMaximizable:any;
  currentFileUpload ?: File;
  uploadedFile !: File;
  priorityList =["High" , "Medium ", "Low"];
  CurrentList =["Open", "Fulfilled", "Closed","Lost"]
  practiceList=["SF Practice" ,"CAD" ,"NW Practice" ,"Infra Practice","ASM Practice","COO-TOPS Practice"]
  prodaptPractice = [
    {name: 'Select'},
    {name: 'SF Practice'},
    {name: 'CAD'},
    { name: "NW Practice" },
    { name: "Infra Practice" },
    { name: "ASM Practice" },
    {name: 'COO-TOPS Practice'}
  ];
  dutchList = ["Yes","No"];
  location =["Offshore" ,"Onsite"]
  PocList =["Narender R", "Roshan M" ,"Muthu V" ,"Pradeep Kumar D" ,"Raghavan S" ,"Srinivasan M" ,"Vikas Singhai" ,"Ramanan G V" ,"Ajith Kumar N"]
   constructor(private newJobFormBuilder: FormBuilder, private router: Router ,http:HttpClient, private authService:JobUploadService , public matDialog:MatDialog) { 
    
    }
  ngOnInit(): void {
    this.newJobForm = this.newJobFormBuilder.group(
      {
        beeLine_Request_Number:new FormControl('',[Validators.required,Validators.minLength(6)]),
        job_description:new FormControl('',[Validators.required ,Validators.minLength(6),Validators.maxLength(30),]),
        department:new FormControl('',[Validators.required]),
        no_of_positions:new FormControl('',[Validators.required]),
        priority:new FormControl('',[Validators.required]),
        cv_DeadLine:new FormControl('',[Validators.required]),
        status:new  FormControl('',[Validators.required]),
        billing_Rate:new FormControl('',[Validators.required]),
        hours_per_week:new FormControl('',[Validators.required]),
        contact_person:new FormControl('',[Validators.required]),
        date_request:new FormControl('',[Validators.required]),
        prodapt_practice:new FormControl('',[Validators.required]),
        prodapt_POC :new FormControl('',[Validators.required]),
        dutch_Language:new FormControl('',[Validators.required]),
        location:new FormControl('',[Validators.required]),
        key_skills :new FormControl(''),
      },
    )
   
  
}


onFileSelected(event:any) {
  let file = event.target.files[0];
  this.uploadedFile =file;
  if(this.uploadedFile!=undefined ||this.uploadedFile!=null){
    this.fileData=true
  } 
}


onSubmit(data:any){
  console.log(this.newJobForm.get('beeLine_Request_Number').value)
  let userDetails: UserDetails={
     beeLine_Request_Number:this.newJobForm.get('beeLine_Request_Number').value,
     job_description:this.newJobForm.get('job_description').value,
     department :this.newJobForm.get('department').value,
     no_of_positions :this.newJobForm.get('no_of_positions').value,
     priority :this.newJobForm.get('priority').value,
     status :this.newJobForm.get('status').value,
     cv_DeadLine :this.newJobForm.get('cv_DeadLine').value,
     billing_Rate :this.newJobForm.get('billing_Rate').value,
     hours_per_week :this.newJobForm.get('hours_per_week').value,
     contact_person :this.newJobForm.get('contact_person').value,
     date_request:this.newJobForm.get('date_request').value,
     prodapt_practice :this.newJobForm.get('prodapt_practice').value,
     prodapt_POC :this.newJobForm.get('prodapt_POC').value,
     dutch_Language :this.newJobForm.get('dutch_Language').value,
     location :this.newJobForm.get('location').value,
     key_skills:this.newJobForm.get('key_skills').value
    
  }
  this.currentFileUpload =this.uploadedFile
   console.log(this.newJobForm.value)

     if(this.newJobForm.valid){ 
          this.authService.sendData(userDetails,this.currentFileUpload).subscribe(result=>{
            
          this.matDialog.open(BeelineDailogComponent)
          })
           this.authService.sendEmail(userDetails,this.currentFileUpload).subscribe(result=>{
            
          }) 
  }
  else{
   alert("Service is not working")
  }
 
 this.newJobForm.reset()
}
}



