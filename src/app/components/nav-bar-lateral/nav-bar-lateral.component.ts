import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-lateral',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar-lateral.component.html',
  styleUrls: ['./nav-bar-lateral.component.scss','../../app.component.scss']
})
export class NavBarLateralComponent {


  paginaProdutos:boolean 
  paginaPerfil:boolean 

  constructor (private router : Router) {

    const path = router.url

    this.paginaProdutos = path === '/produtos'
    this.paginaPerfil = path === '/perfil'

  }

  selecionarLink_produtos() {
    this.router.navigate(['/produtos'])
  }

  selecionarLink_perfil() {
    this.router.navigate(['/perfil'])
  }

  selecionarLink_logout() {
    localStorage.clear
    this.router.navigate(['/'])
  }
  

}


