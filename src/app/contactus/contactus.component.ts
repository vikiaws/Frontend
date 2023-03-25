import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContactuspopupComponent } from '../contactuspopup/contactuspopup.component';
import { JobUploadService } from '../job-upload.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactform: any;
  username:any;
  constructor(private contactForm: FormBuilder ,private authService:JobUploadService, private router:Router, public matDialog:MatDialog) { }

  ngOnInit(): void {
    this.contactform = this.contactForm.group({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      message:new FormControl('',[Validators.required]),

  }
    )
}
send(data:any){
  if(this.contactform.valid){ 
       this.authService.sendContactUsData(this.contactform.value).subscribe(result=>{
        
         this.contactform.reset()
         this.matDialog.open(ContactuspopupComponent)
       })

}
else{
 alert("Service not Working")
}
}

}
