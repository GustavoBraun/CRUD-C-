import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProdutoComponent } from './delete-produto.component';

describe('DeleteProdutoComponent', () => {
  let component: DeleteProdutoComponent;
  let fixture: ComponentFixture<DeleteProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProdutoComponent]
    });
    fixture = TestBed.createComponent(DeleteProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});