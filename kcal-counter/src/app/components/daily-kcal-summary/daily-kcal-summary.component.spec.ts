import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyKcalSummaryComponent } from './daily-kcal-summary.component';

describe('DailyKcalSummaryComponent', () => {
  let component: DailyKcalSummaryComponent;
  let fixture: ComponentFixture<DailyKcalSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyKcalSummaryComponent]
    });
    fixture = TestBed.createComponent(DailyKcalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
