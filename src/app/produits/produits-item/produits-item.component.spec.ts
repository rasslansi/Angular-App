import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsItemComponent } from './produits-item.component';

describe('ProduitsItemComponent', () => {
  let component: ProduitsItemComponent;
  let fixture: ComponentFixture<ProduitsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitsItemComponent]
    });
    fixture = TestBed.createComponent(ProduitsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
