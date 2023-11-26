import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarioObreroComponent } from './salario-obrero.component';

describe('SalarioObreroComponent', () => {
  let component: SalarioObreroComponent;
  let fixture: ComponentFixture<SalarioObreroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalarioObreroComponent]
    });
    fixture = TestBed.createComponent(SalarioObreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
