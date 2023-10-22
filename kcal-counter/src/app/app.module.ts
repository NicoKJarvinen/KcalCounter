import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KcalEntryComponent } from './components/kcal-entry/kcal-entry.component';
import { DailyKcalSummaryComponent } from './components/daily-kcal-summary/daily-kcal-summary.component';
import { MonthlyKcalSummaryComponent } from './components/monthly-kcal-summary/monthly-kcal-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    KcalEntryComponent,
    DailyKcalSummaryComponent,
    MonthlyKcalSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}