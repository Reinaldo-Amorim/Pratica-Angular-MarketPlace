import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselProdutosComponent } from './carrosel-produtos.component';

describe('CarroselProdutosComponent', () => {
  let component: CarroselProdutosComponent;
  let fixture: ComponentFixture<CarroselProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroselProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroselProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
