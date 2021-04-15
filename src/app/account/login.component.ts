import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { User } from './user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  private formSubmitAttempt = false;
  private returnUrl: string;
  loginInvalid = false;
  usernameInvalid = false;
  passwordInvalid = false;
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router,private route: ActivatedRoute) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';

  }

  ngOnInit(): void {
    if(this.authService.loggedIn) {
      this.router.navigate([this.returnUrl]);
    }
  }
  onSubmit() {
    this.loginInvalid = false;
    try {
      this.authService.logIn(this.username, this.password).subscribe(response => {
        if(response.status === 1) {
          this.loginInvalid = false;
          this.router.navigate([this.returnUrl]);
        }
        else {
          this.loginInvalid = true;
        }
      },
      error => {
        this.loginInvalid = true;
      });
    } catch (err) {
      this.loginInvalid = true;
    }
  }
}
