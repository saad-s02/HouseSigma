import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { matchPassword } from './passwordMatchValidator';
import { AlertfyService } from 'src/app/services/alertfy.service';
import { UserForRegister } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup;
  userSubmitted: boolean = false;
  user!: UserForRegister;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertify: AlertfyService
  ) {
    this.registerationForm = new FormGroup({
      userName: new FormControl(),
    });
  }

  userData(): UserForRegister {
    return (this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      phone: this.phone.value,
    });
  }

  ngOnInit() {
    this.createRegisterationForm();
  }

  createRegisterationForm() {
    this.registerationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        phone: [null, [Validators.required, Validators.maxLength(10)]],
      },
      {
        validators: matchPassword,
      }
    );
  }

  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get phone() {
    return this.registerationForm.get('phone') as FormControl;
  }

  onSubmit() {
    console.log(this.registerationForm);
    this.userSubmitted = true;

    if (this.registerationForm.valid) {
      this.authService.registerUser(this.userData()).subscribe(() => {
        this.registerationForm.reset();
        this.userSubmitted = false;
        this.alertify.success('Successfully created account');
      });
    }
  }
}
