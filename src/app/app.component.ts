import { Component   } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobUploadService } from './job-upload.service';
import * as cron from 'cron';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginforminfo:any
  username:any;
  password:any;
  title = 'KPN_Portal';
  sideBarOpen = true;
  showForm:boolean=false;
  form: any;
  constructor(private contactForm: FormBuilder ,private authService:JobUploadService , private router:Router) { }
  ngOnInit(): void {
    this.form = this.contactForm.group({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
      
  })
  const job = new cron.CronJob(
    '0 25 10 * * *', // Schedule the job to run at 12:00:00 PM every day
    () => {
      this.authService.makeApiCall();
    },
    null,
    true,
    'IST' // Specify the timezone
  );
  job.start();
}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  logined(){
    
    let userDetails = this.form.value
    if(this.form.valid){ 
      this.authService.loginData(userDetails).subscribe(result=>{
        if ((result[0]=="Admin") || (result[0]=="User")){
          localStorage.setItem('Result',result[0])
          localStorage.setItem('username',result[1])
          
          
          this.router.navigate(['home'])
          this.showForm=true;  
        }
        else{
          alert("Invalid User Credentials")
        }  
      }) 
}
    else{
     alert("Username and Password Both Fields Are Required")
}  }
  send(data:any){
    this.form.reset()
}
}
