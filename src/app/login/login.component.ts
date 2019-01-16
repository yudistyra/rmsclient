import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin:boolean = false;

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    const loginPayload = {
      username: form.value.username,
      password: form.value.password
    }
    
    this.apiService.login(loginPayload).subscribe(response => {
      if(response.status === 200) {
        window.localStorage.setItem('token', response.jwtResponse.accessToken);
        this.router.navigate(['home']);
      }
      else {
        this.invalidLogin = true;
        alert(response.message);
      }
    });
  }
}
