import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdduserpopupComponent } from '../adduserpopup/adduserpopup.component';
import { CustomValidators } from '../confirm-password.validator';
import { DeleteuserpopupComponent } from '../deleteuserpopup/deleteuserpopup.component';
import { JobUploadService } from '../job-upload.service';
import { User } from '../user';
import { UsereditdialogComponent } from '../usereditdialog/usereditdialog.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  operatorList:any;
  selectedOpr: any;
  orderStatus:any;
  userDetails:any =[];
  addUserForm:any;
  userId ?:"";
  true_Value ?:'true';
  false_Value ?:'false';
  showForm:boolean=false;
  editForm:boolean=false;
  cancelDialog:boolean=false;
  
  public details:User[]=[];
  public userdetails=[];

  detailedOperatorList=[
    {
    "no":"1",
     "firstname":"Murali",
     "lastname":"Kumar",
     "username":"Murali@123",
     "mail":"murali.kumar@prodapt.com"
    },
    {
      "no":"2",
      "firstname":"Jagadeesh ",
      "lastname":"Shetty",
      "username":"Jagadeesh_6744",
      "mail":"jagdeesh.s@prodapt.com"
    },
    {
      "no":"3",
      "firstname":"Mounika ",
      "lastname":"Rathod",
      "username":"Mouni@3456",
      "mail":"mounika.rk@prodapt.com"
    }, {  
      "no":"4",
      "firstname":"Jhon ",
      "lastname":"William",
      "username":"Jhon_2879",
      "mail":"jhon.william@prodapt.com"
    }, {
      "no":"5",
      "firstname":"Rajesh ",
      "lastname":"Kumar",
      "username":"Rajesh@823",
      "mail":"rajesh.kumar@prodapt.com"
    }
 ]
  constructor(private newUserFormBuilder: FormBuilder,private authService:JobUploadService, private router:Router, public matDialog:MatDialog) { }

  ngOnInit(): void {
    this.authService.getUserData().subscribe((response:User[])=> {
      response.forEach(opr =>{
       var myData:User = new User("","","","","","");
       myData.id=opr.id;
       myData.username = opr.username;
       myData.first_name= opr.first_name;
       myData.last_name=opr.last_name;
       myData.email=opr.email;
       myData.is_superuser=opr.is_superuser;
      this.details.push(myData); 
     
      });
     })
    this.addUserForm = this.newUserFormBuilder.group(
      {
        username:new FormControl('',[Validators.required,Validators.maxLength(16),Validators.minLength(6)]),
        first_name:new FormControl('',[Validators.required,Validators.maxLength(24)]),
        last_name:new FormControl('',[Validators.required,Validators.maxLength(24)]),
        email:new FormControl('',[Validators.required,Validators.email]),
        password1:new FormControl('',[Validators.required,Validators.maxLength(16),Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$')]),
        password2:new FormControl('',[Validators.required ],
        ),
      },
      { validators: CustomValidators.passwordsMatching }
  )
}
  navToAddUser(){
    this.showForm=true;
  }
  navToProfile(){
    this.showForm = false;
    this.addUserForm.reset()

  }
  navToaddJobForm(){
     if(this.addUserForm.valid){ 
          this.authService.sendRegisterData(this.addUserForm.value).subscribe(result=>{
            
            this.addUserForm.reset()
            this.showForm=false;
            this.matDialog.open(AdduserpopupComponent)
          })
          this.authService.sendRegisterMailData(this.addUserForm.value).subscribe(result=>{
            

          })

  }
  else{
    alert("Service not Working")
  }
}
  navToUser(){
    this.editForm = false;

  }
 
  deletedUser(id:any){
    this.userId = id
    this.cancelDialog=true
  }
  navtoDashboard(){
    this.cancelDialog=false

  }
  EditUser(id:any){
    this.authService.amendInfoUser(id).subscribe(res => {
      this.userDetails = res;
      
    }); 
    this.editForm=true

  }
  navToUserDashboard(){
    this.editForm=false
  }
  navToEditUser(id:any){
    this.userDetails.id = id;
    console.log(this.userDetails)
    this.authService.amendUser(this.userDetails).subscribe(res => {
      if(!!res && !!res.data) {
        
      }
    this.editForm=false
    this.matDialog.open(UsereditdialogComponent)

    })
    
  }
  navToCancel(id:any){
      this.authService.cancelUser(id).subscribe(res => {
      this.authService.orderStatus = res;
      this.cancelDialog=false;
      this.matDialog.open(DeleteuserpopupComponent)
    }); 
  }
  filterValue(table:any, event:any){
    table.filterGlobal(event.target.value, 'contains')
}
clear(table: any) {
      table.clear();
}
captureInput(event:any){
  this.userDetails[event.target.id] = event.target.value;
 }
}
