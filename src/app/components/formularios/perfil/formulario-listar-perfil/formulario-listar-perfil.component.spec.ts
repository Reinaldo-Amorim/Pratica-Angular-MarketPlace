import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioListarPerfilComponent } from './formulario-listar-perfil.component';

describe('FormularioListarPerfilComponent', () => {
  let component: FormularioListarPerfilComponent;
  let fixture: ComponentFixture<FormularioListarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioListarPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioListarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
