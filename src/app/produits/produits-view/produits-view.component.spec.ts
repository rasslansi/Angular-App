import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsViewComponent } from './produits-view.component';

describe('ProduitsViewComponent', () => {
  let component: ProduitsViewComponent;
  let fixture: ComponentFixture<ProduitsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitsViewComponent]
    });
    fixture = TestBed.createComponent(ProduitsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
