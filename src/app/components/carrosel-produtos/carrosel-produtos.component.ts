import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrosel-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrosel-produtos.component.html',
  styleUrl: './carrosel-produtos.component.scss'
})
export class CarroselProdutosComponent {
  produtosPorPagina: number = 5;
  paginaAtual = 0;
  // const [produtos, setProdutos] = useState<Produto[]>(produto); Aqui vai ser a variavel que os produtos vao estar guardados
  // totalPaginas = Math.ceil(produtos.length / produtosPorPagina);
  paginaInicial = this.paginaAtual * this.produtosPorPagina;
  paginaFinal = this.paginaInicial + this.produtosPorPagina;
  // produtoAtual = produtos.slice(paginaInicial, paginaFinal);

  paginaAnterior = () => {

  }

  paginaPosterior = () => {

  }
}
