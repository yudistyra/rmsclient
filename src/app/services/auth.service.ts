import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {
    token: string;

    constructor(private apiService: ApiService,
        private router: Router) {}

    signInUser(loginPayLoad) {
        this.apiService.login(loginPayLoad).subscribe(response => {
            if(response.status === 200) {
              window.localStorage.setItem('token', response.jwtResponse.accessToken);
              this.token = response.jwtResponse.accessToken;
              this.router.navigate(['home']);
            }
            else {
              alert(response.message);
            }
          });
    }

    isAuthenticated() {
        this.token = localStorage.getItem('token');
        return this.token != null;
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }
}