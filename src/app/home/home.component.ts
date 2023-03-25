import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Chart } from 'chart.js/auto';
import { JobUploadService } from '../job-upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public chart: any;
  public openChart:any;
  public beeline_status_open ?: string;
  public details:any=[];
  public details1:any=[];
  public details2:any=[];
  public details3:any=[];
  public details4:any=[];
  public details5:any=[];



  public counted:any;
  public counted1:any;
  public counted2:any;
  public counted3:any;
  public counted4:any;
  public counted5:any;



  opencountButton :boolean=false
  fulfilledcountButton :boolean=false
  lostcountButton :boolean=false
  closedcountButton :boolean=false




  constructor(private router:Router, private authService:JobUploadService) {
  
  }
  ngOnInit(): void {
    this.createChart();
    this.authService.getOverallData().subscribe(res => {
      this.authService.count = res;
      localStorage.setItem('Count',res)
     
      this.details=res;
    })
    this.authService.getOverallProfileData().subscribe(result5 => {
      this.authService.count = result5;
      
      localStorage.setItem('Count5',result5)
      this.counted5 = localStorage.getItem('Count5')
      this.details5= this.counted5.split(',')
     
    })
  }
  createChart(){
   
    this.counted = localStorage.getItem('Count')
    
    this.details= this.counted.split(',')
    
    this.chart = new Chart("MyChart", {
      type:'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['No Of Beeline Requests'],

	       datasets: [
          {
            label: "Open",
            data: [this.details[0]],
            backgroundColor: '#00AB08',
          },  
          {
            label: "Fulfilled",
            data: [this.details[1]],
            backgroundColor: '#FC6A03',
          }, 
          {
            label: "Lost",
            data: [this.details[3]],
            backgroundColor: '#190087',
          }, 
          {
            label: "Closed",
            data: [this.details[2]],
            backgroundColor: '#EB1C01',
          },

         
        ]
        
      },
      options: {
        indexAxis: 'y',
        aspectRatio:1.5,
        scales: {
          x: {
            ticks: {
              display: true,
              precision: 0
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              display: true,
              precision: 0
            }
          }
        },
      },
      
      
    });
  }
  
  detailedOpen(){
    this.authService.getOpenCountData().subscribe(result1 => {
      this.authService.count = result1;
      this.details1= result1
      this.opencountButton=true

    })

  }

  detailedFulfilled(){
    this.authService.getFulfilledCountData().subscribe(result2 => {
      this.authService.count = result2;
      this.details2= result2
      this.fulfilledcountButton=true
    })

  }
  detailedLost(){
    this.authService.getLostCountData().subscribe(result3 => {
      this.authService.count = result3;
      this.details3= result3
      this.lostcountButton=true
    })

  }
  detailedClosed(){
    this.authService.getClosedCountData().subscribe(result4 => {
      this.authService.count = result4;
      this.details4= result4
      this.closedcountButton=true
    })

  }
  navtoDashboard(){
    this.opencountButton=false
  }
  navtoDashboard1(){
    this.fulfilledcountButton=false
  }
  navtoDashboard2(){
    this.lostcountButton=false
  }
  navtoDashboard3(){
    this.closedcountButton=false
  }
}