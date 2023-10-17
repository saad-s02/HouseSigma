import { Component, OnInit } from '@angular/core';
import { AlertfyService } from '../services/alertfy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser!: string;

  constructor(private alertify: AlertfyService) { }

  ngOnInit() {
  }

  loggedin() {
    this.loggedinUser = localStorage.getItem('userName') ?? '';
    return this.loggedinUser;
  }  

  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');

    this.alertify.success("You have logged out")
  }

}
