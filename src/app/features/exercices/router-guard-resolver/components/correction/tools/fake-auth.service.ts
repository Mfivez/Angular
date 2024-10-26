import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrectionFakeAuthService {
  private isLoggedIn: boolean = false

  login() { this.isLoggedIn = true }

  logout() { this.isLoggedIn = false }

  isAuthenticated(): boolean { return this.isLoggedIn }
}