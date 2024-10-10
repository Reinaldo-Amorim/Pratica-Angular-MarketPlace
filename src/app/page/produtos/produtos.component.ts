import { Component } from '@angular/core';
import { NavBarLateralComponent } from "../../components/nav-bar-lateral/nav-bar-lateral.component";
import { CadastroProdutoComponent } from "../../components/page-Produtos/cadastro-produto/cadastro-produto.component";
import { CarroselProdutosComponent } from "../../components/carrosel-produtos/carrosel-produtos.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NavBarLateralComponent, CadastroProdutoComponent, CarroselProdutosComponent, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss','../../app.component.scss']
})
export class ProdutosComponent {
carroselProdutos:boolean = true
cadastroProduto:boolean = false

trocarParaCarrosel() {
this.cadastroProduto = false
this.carroselProdutos = true
}

trocarParaCadastro() {
this.cadastroProduto = true
this.carroselProdutos = false
}


}
