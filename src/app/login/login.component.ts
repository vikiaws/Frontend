import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { JobUploadService } from '../job-upload.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginforminfo:any
  username:any;
  password:any;
  form: any;
  constructor(private contactForm: FormBuilder ,private authService:JobUploadService , private router:Router) { }
  ngOnInit(): void {
    this.form = this.contactForm.group({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
      
  }
    )
}
logined(){
  console.log(this.form.value)
  let userDetails = this.form.value
  if(this.form.valid){ 
    this.authService.loginData(userDetails).subscribe(result=>{
      console.log(result)
      if ((result=="Admin") || (result=="User")){
        localStorage.setItem('Result',result)
        this.router.navigate(['home'])  
      }
      else{
        alert("Invalid User Credentials")
      }  
    }) 
}
  else{
   alert("Username and Password Both Fields Are Required")
}  }
}
