import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensarBilletesComponent } from './dispensar-billetes.component';

describe('DispensarBilletesComponent', () => {
  let component: DispensarBilletesComponent;
  let fixture: ComponentFixture<DispensarBilletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispensarBilletesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispensarBilletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
