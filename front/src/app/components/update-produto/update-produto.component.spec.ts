import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProdutoComponent } from './update-produto.component';

describe('UpdateProdutoComponent', () => {
  let component: UpdateProdutoComponent;
  let fixture: ComponentFixture<UpdateProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProdutoComponent]
    });
    fixture = TestBed.createComponent(UpdateProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
