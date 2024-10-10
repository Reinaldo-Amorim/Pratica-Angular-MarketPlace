import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarProdutoComponent } from './formulario-editar-produto.component';

describe('FormularioEditarProdutoComponent', () => {
  let component: FormularioEditarProdutoComponent;
  let fixture: ComponentFixture<FormularioEditarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEditarProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEditarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
