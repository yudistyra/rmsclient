import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';

@Injectable()
export class ApiService {
    baseUrl: string = 'http://localhost:8080/api/'

    constructor(private http: HttpClient) {}

    login(loginPayload) : Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.baseUrl + 'auth/signin', loginPayload);
    }
}