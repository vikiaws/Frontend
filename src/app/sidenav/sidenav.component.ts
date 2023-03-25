import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobUploadService } from '../job-upload.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  user:any;
  constructor(http:HttpClient, private authService:JobUploadService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('Result')
  }
  
  
}
