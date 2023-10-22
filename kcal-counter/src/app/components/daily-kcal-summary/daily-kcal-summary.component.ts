import { Component, OnInit } from '@angular/core';
import { KcalService } from '../../kcal.service';

@Component({
  selector: 'app-daily-kcal-summary',
  templateUrl: './daily-kcal-summary.component.html',
  styleUrls: ['./daily-kcal-summary.component.css']
})
export class DailyKcalSummaryComponent implements OnInit {
  dailySummaries: any[] = [];

  constructor(private kcalService: KcalService) {}

  ngOnInit() {
    this.kcalService.getDataChangeObservable().subscribe(() => {
      this.dailySummaries = this.kcalService.getDailyKcalSummary();
    });
  }
}