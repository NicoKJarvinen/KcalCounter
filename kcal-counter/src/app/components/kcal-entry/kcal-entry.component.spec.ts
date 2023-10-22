import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcalEntryComponent } from './kcal-entry.component';

describe('KcalEntryComponent', () => {
  let component: KcalEntryComponent;
  let fixture: ComponentFixture<KcalEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KcalEntryComponent]
    });
    fixture = TestBed.createComponent(KcalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
