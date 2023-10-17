import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/model/user';
import { AlertfyService } from 'src/app/services/alertfy.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertify: AlertfyService,
    private router: Router
  ) {}

  ngOnInit() {}
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    // const token = this.authService.authUser(loginForm.value);
    this.authService
      .authUser(loginForm.value)
      .subscribe((response: UserForLogin) => {
        console.log(response);
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('userName', user.username);
          this.alertify.success('Login Successful');
          this.router.navigate(['/']);
        }
      });
  }
}
