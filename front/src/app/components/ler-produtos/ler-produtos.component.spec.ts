import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerProdutosComponent } from './ler-produtos.component';

describe('LerProdutosComponent', () => {
  let component: LerProdutosComponent;
  let fixture: ComponentFixture<LerProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LerProdutosComponent]
    });
    fixture = TestBed.createComponent(LerProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
