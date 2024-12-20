import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isConnected: boolean = true;
  
  logIn (): void {
    this.isConnected = true;
  }

  logOut (): void {
    this.isConnected = false;
  }
}
