import { Component, OnInit } from '@angular/core';
import { KcalService } from '../../kcal.service';

@Component({
  selector: 'app-monthly-kcal-summary',
  templateUrl: './monthly-kcal-summary.component.html',
  styleUrls: ['./monthly-kcal-summary.component.css']
})
export class MonthlyKcalSummaryComponent implements OnInit {
  monthlySummaries: any[] = [];

  constructor(private kcalService: KcalService) {}

  ngOnInit() {
    this.kcalService.getDataChangeObservable().subscribe(() => {
      this.monthlySummaries = this.kcalService.getMonthlyKcalSummary();
    });
  }
}