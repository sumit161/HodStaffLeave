import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  IsLoggedInStatus: boolean = false;
  constructor(private _router: Router) {}
  getLoggedInStatus() {
    return this.IsLoggedInStatus;
  }
  LogInApp(obj: any) {
    // console.log(Userrole);

    this.IsLoggedInStatus = true;
    //resp on successiful login>>token,userRole,username
    localStorage.setItem('Userrole', obj.Userrole);
    localStorage.setItem('username', obj.userName);
    if (obj.userRole === 'STAFF') {
      this._router.navigate(['/staffdash']);
    }else{
      this._router.navigate(['/hoddash']);
    }
  }
  LogOutFromApp() {
    this.IsLoggedInStatus = false;
    localStorage.removeItem('Userrole');
    localStorage.removeItem('username');
  }
  IsAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('Userrole')) {
        this.IsLoggedInStatus = true;
      } else {
        this.IsLoggedInStatus = false;
      }
      setTimeout(() => {
        resolve(this.IsLoggedInStatus);
      }, 0);
    });
  }
}
