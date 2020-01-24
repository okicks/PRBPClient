import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    })
  }

  onSubmit(){
    console.log(this.registerForm.value);
    this.authService
      .register(this.registerForm.value)
      .subscribe(() => this.authService.login(this.registerForm.value));
  }
}
