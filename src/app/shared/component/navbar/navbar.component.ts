import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService: AuthService) {}
  accessFor :string =  localStorage.getItem('Userrole')!
  ngOnInit(): void {}
  Onlogout() {
    this._AuthService.LogOutFromApp();
  }
}
