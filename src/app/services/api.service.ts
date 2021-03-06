import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtResponse } from '../model/jwt-api.response';
import { ApiResponse } from '../model/api.response';

@Injectable()
export class ApiService {
    baseUrl: string = 'http://localhost:8080/rmsservice/'

    constructor(private http: HttpClient) {}

    login(loginPayload) : Observable<JwtResponse> {
        return this.http.post<JwtResponse>(this.baseUrl + 'api/v1/auth', loginPayload);
    }

    getUsers() : Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrl + 'api/v1/users');
    }
}