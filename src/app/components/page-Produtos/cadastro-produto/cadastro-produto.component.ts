import { ApiCubosService } from './../../../service/api-cubos.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TituloSubtituloComponent } from "../../titulo-subtitulo/titulo-subtitulo.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputValueCadastrarProduto } from '../../../../model/produtos/cadastro_produtos';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [TituloSubtituloComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss', '../../../app.component.scss']
})
export class CadastroProdutoComponent implements OnInit {

  myForm!: FormGroup
  produto!: InputValueCadastrarProduto
  @Output() cadastroProdutoTroca = new EventEmitter<void>()


  constructor(private router: Router, apiServiceCubos: ApiCubosService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nomeProduto: [null, Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)],
      preco: [null, Validators.required, Validators.min(1), Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      estoque: [null, Validators.required, Validators.min(1), Validators.pattern(/^[0-9]+$/)],
      descricao: [null, Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z\s]*$/)],
      imagem_link: [null, Validators.required, Validators.minLength(10), Validators.pattern(/^[a-zA-Z\s]*$/)],
    })
  }


  async cadastrarProduto() {


    this.cadastroProdutoTroca.emit()


  }





  linkCancelar() {
    this.router.navigate(['/produtos'])
  }


}
