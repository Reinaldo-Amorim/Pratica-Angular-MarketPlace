import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss','../../app.component.scss']
})
export class CadastroComponent {

  constructor (private router : Router) {}




  direcionar(){
    this.router.navigate(['login'])
  }
}
