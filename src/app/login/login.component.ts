// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../interfaces/login';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: Login = {
    Email: '',
    Password: ''
  };

  constructor(private vehicleService: VehicleService) {}

  onSubmit(form: NgForm): void {
    console.log(form.value);

    if (form.valid) {
      this.vehicleService.loginUser(this.model).subscribe(
        response => {
          console.log('User logged in successfully:', response);
          // Handle success response
        },
        error => {
          console.error('Error logging in user:', error);
          // Handle error response
        }
      );
    }
  }
}
