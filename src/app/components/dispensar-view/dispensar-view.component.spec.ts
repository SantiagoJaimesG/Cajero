import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensarViewComponent } from './dispensar-view.component';

describe('DispensarViewComponent', () => {
  let component: DispensarViewComponent;
  let fixture: ComponentFixture<DispensarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispensarViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispensarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
