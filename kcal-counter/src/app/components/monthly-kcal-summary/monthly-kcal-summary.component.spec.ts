import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyKcalSummaryComponent } from './monthly-kcal-summary.component';

describe('MonthlyKcalSummaryComponent', () => {
  let component: MonthlyKcalSummaryComponent;
  let fixture: ComponentFixture<MonthlyKcalSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyKcalSummaryComponent]
    });
    fixture = TestBed.createComponent(MonthlyKcalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
