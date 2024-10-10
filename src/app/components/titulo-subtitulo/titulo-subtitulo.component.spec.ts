import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloSubtituloComponent } from './titulo-subtitulo.component';

describe('TituloSubtituloComponent', () => {
  let component: TituloSubtituloComponent;
  let fixture: ComponentFixture<TituloSubtituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloSubtituloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloSubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
