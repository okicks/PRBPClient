import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: String;
  loginForm: FormGroup;

  constructor(private form: FormBuilder, private authService: AuthService) {
    authService.getError.subscribe(error => this.error = error.error_description);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.form.group({
      username: new FormControl,
      password: new FormControl
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value);
  }

}
