import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItenComponent } from './product-iten.component';

describe('ProductItenComponent', () => {
  let component: ProductItenComponent;
  let fixture: ComponentFixture<ProductItenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
