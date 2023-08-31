import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { initParticlesJs } from 'src/app/utils/particles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword = true;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private apiService: ApiService, private _snackBar: MatSnackBar, private router: Router) {
    initParticlesJs();
  }

  onLogin(): void {
    this.apiService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: data => {
        sessionStorage.setItem("token", data.access_token);
        sessionStorage.setItem("email", data.email);
        this.router.navigate(['/home']);
        this._snackBar.open('Login successfully!', 'Close', {
          duration: 2500
        });
      },
      error: error => {
        this.loginForm.reset();
        this._snackBar.open('Invalid credentials!', 'Close', {
          duration: 2500
        });
      }
    });
  }

}
