import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected styleUrls
})
export class RegisterComponent {
  constructor(private vehicleService: VehicleService) { }

  onSubmit(vehicleForm: NgForm) {
    console.log(vehicleForm);
    
    if (vehicleForm.valid) {
      this.vehicleService.registerUser(vehicleForm.value).subscribe(
        response => {
          console.log('Registration successful', response);
          // Handle successful registration (e.g., navigate to a login page)
          if(response.message==="User registered successfully") alert("Account ho gaya create")
        },
        error => {
          console.error('Error during registration', error);
          // Handle error (e.g., display an error message)
        }
      );
    }
  }
}
