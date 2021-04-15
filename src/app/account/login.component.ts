import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loginInvalid = true;
  constructor(private authService: AuthService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  onSubmit(event) {
    
  }

}
