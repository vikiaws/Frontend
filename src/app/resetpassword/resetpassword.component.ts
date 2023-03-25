import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../confirm-password.validator';
import { JobUploadService } from '../job-upload.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpasswordform:any;
  user1:any
  resetData:any;
  editDialog:boolean=false;

  constructor(private resetPasswordForm: FormBuilder ,private authService:JobUploadService, private router:Router) { }

  ngOnInit(): void {
    this.resetpasswordform = this.resetPasswordForm.group({
      password1:new FormControl('',[Validators.required,Validators.maxLength(16),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$')]),
      password2:new FormControl('',[Validators.required ]),
      
  },
  { validators: CustomValidators.passwordsMatching })
  this.user1=localStorage.getItem('username')
 
}
  send(data:any){
    if(this.resetpasswordform.valid){ 
         this.authService.resetPasswordData(this.resetpasswordform.value,this.user1).subscribe(result=>{
           
           this.resetpasswordform.reset()
         })
         this.authService.resetPasswordMail(this.resetpasswordform.value,this.user1).subscribe(result=>{
         
        })
        this.editDialog=true

  }
  else{
   alert("Service not Working")
  }
  }
  navtoDashboard(){
    window.location.reload();

  }
  navToCancel(){
    this.router.navigate(['home'])
  }
}
