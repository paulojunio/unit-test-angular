import { AuthenticationService } from './authentication-service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  salSlip: string = '';
  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit(){
    this.authenticationService.authenticate();
  }

  getSalarySlip() {
    if(this.authenticationService.checkAuthentication())
      return "Salary Slip";
    return "Not Authticated";
  }

  getSalarySlipTwo() {
    if(this.authenticationService.checkAuthentication()) {
      this.salSlip = "Salary Slip";
    }else{
      this.salSlip = "Not Authticated";
    }
  }
}
