import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResetPassword } from '../models/reset-password';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private baseUrl = 'http://localhost:8081';
  constructor(private httpClient: HttpClient) {}
  //email-password-method
  processForgetPasswordForm(email: string): Observable<Object> {
    return this.httpClient.post(
      this.baseUrl + '/password/forget_password',
      email
    );
  }

  //new-password
  resetPassword(resetPassword: ResetPassword): Observable<Object> {
    return this.httpClient.post(
      this.baseUrl + '/password/reset_password',
      resetPassword
    );
  }
}
