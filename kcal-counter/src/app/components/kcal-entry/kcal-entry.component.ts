import { Component } from '@angular/core';
import { KcalService } from '../../kcal.service';

@Component({
  selector: 'app-kcal-entry',
  templateUrl: './kcal-entry.component.html',
  styleUrls: ['./kcal-entry.component.css']
})
export class KcalEntryComponent {
  entry: any = {
    date: '',
    foodItem: '',
    kcalPer100g: 0,
    weight: 0
  };

  maxCapacityExceeded = false;

  constructor(private kcalService: KcalService) {}

  submitForm() {
    if (this.kcalService.getEntriesCount() >= 200) {
      this.maxCapacityExceeded = true;
    } else {
      this.kcalService.addEntry(this.entry);
      this.maxCapacityExceeded = false;
      this.entry = { date: '', foodItem: '', kcalPer100g: 0, weight: 0 };
    }
  }
}