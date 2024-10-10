import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../../app.component.scss' ]
})
export class LoginComponent {


  constructor (private router: Router) {}







 direcionar() {
  this.router.navigate(["cadastro"])
 }
}
