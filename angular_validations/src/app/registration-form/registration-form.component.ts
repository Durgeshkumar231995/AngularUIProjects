import { Component,OnInit } from '@angular/core';
import { User } from '../user.model';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm!: FormGroup;
  

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      // Write Code here for following validations:
      // - All fields are required.
      // - 'firstName' and 'lastName' fields contain only text (no numbers or special characters).
      // - Email validation for the email field.
      // - Password should have a minimum length of 8 characters.
      // - Password should contains at least one uppercase letter and one special character.
    
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^[A-Z]+$/), this.specialCharacterValidator]]
    });
  }

   specialCharacterValidator(control: AbstractControl): ValidationErrors | null {
    const specialCharacterPattern = /[!@#$%^&*(),.?:{}|<>]/;
    return specialCharacterPattern.test(control.value) ? null : { specialCharacter: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Form is valid, handle the submission (e.g., send data to a server)
      const user: User = this.registrationForm.value;
      console.log('User submitted:', user);
      alert('User Submitted!')
      
      
    } else {
      // Form is invalid, mark fields as touched to display error messages
      this.markFormGroupTouched(this.registrationForm);
    }
  }


  

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
