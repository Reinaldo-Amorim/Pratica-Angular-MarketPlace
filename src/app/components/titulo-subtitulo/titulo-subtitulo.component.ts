import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-subtitulo',
  standalone: true,
  imports: [],
  templateUrl: './titulo-subtitulo.component.html',
  styleUrl: './titulo-subtitulo.component.scss'
})
export class TituloSubtituloComponent {

  @Input() nomeLoja: string = ''
}
