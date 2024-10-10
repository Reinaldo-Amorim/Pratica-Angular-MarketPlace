import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarPerfilComponent } from './formulario-editar-perfil.component';

describe('FormularioEditarPerfilComponent', () => {
  let component: FormularioEditarPerfilComponent;
  let fixture: ComponentFixture<FormularioEditarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEditarPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
