import { Component } from '@angular/core';
import { NavBarLateralComponent } from "../../components/nav-bar-lateral/nav-bar-lateral.component";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [NavBarLateralComponent],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss','../../app.component.scss']
})
export class PerfilComponent {

}
