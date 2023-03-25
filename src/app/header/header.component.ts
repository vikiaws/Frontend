import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username:any;
  user1:any;
  user2:any;
  showLogout = false;

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username=localStorage.getItem('Result')
    this.user1=localStorage.getItem('username')
    this.user2= this.user1.toUpperCase( )
  }
  showLogoutButton() {
    this.showLogout = true;
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logOut(){
    window.location.reload();
  }
}
