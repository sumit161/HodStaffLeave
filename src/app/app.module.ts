import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/component/login/login.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { DashbordHodComponent } from './shared/component/dashbord-hod/dashbord-hod.component';
import { DashbordStaffComponent } from './shared/component/dashbord-staff/dashbord-staff.component';
import { RegisterComponent } from './shared/component/register/register.component';
import { SignUpComponent } from './shared/component/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeaveFormComponent } from './shared/component/dashbord-staff/leave-form/leave-form.component';
import { LeaveshtmlComponent } from './shared/component/dashbord-staff/leaveshtml/leaveshtml.component';
import { LeavesComponent } from './shared/component/dashbord-staff/leaves/leaves.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashbordHodComponent,
    DashbordStaffComponent,
    RegisterComponent,
    SignUpComponent,
    LeaveFormComponent,
    LeaveshtmlComponent,
    LeavesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
