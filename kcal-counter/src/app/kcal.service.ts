import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KcalService {
  private entries: KcalEntry[] = [];
  private dataChangeObservable = new BehaviorSubject<void | null>(null);

  addEntry(entry: KcalEntry): void {
    this.entries.push(entry);
    this.dataChangeObservable.next(null);
  }

  getEntriesCount(): number {
    return this.entries.length;
  }

  getDailyKcalSummary(): DailyKcalSummary[] {
    const dailySummaries: DailyKcalSummary[] = [];

    const dateGroups = this.groupEntriesByDate(this.entries);

    for (const date in dateGroups) {
      if (dateGroups.hasOwnProperty(date)) {
        const totalKcal = dateGroups[date].reduce(
          (acc, entry) => acc + entry.kcalPer100g * (entry.weight / 100),
          0
        );
        dailySummaries.push({ date, totalKcal });
      }
    }

    return dailySummaries;
  }

  getMonthlyKcalSummary(): MonthlyKcalSummary[] {
    const monthlySummaries: MonthlyKcalSummary[] = [];

    // Group entries by year and month and calculate monthly averages
    const monthGroups = this.groupEntriesByYearAndMonth(this.entries);

    for (const year in monthGroups) {
      if (monthGroups.hasOwnProperty(year)) {
        for (const month in monthGroups[year]) {
          if (monthGroups[year].hasOwnProperty(month)) {
            const monthEntries = monthGroups[year][month];
            const totalKcal = monthEntries.reduce(
              (acc, entry) => acc + entry.kcalPer100g * (entry.weight / 100),
              0
            );
            const averageKcal = totalKcal / monthEntries.length;

            // Format the month using Intl.DateTimeFormat
            const formattedMonth = new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(`${year}-${month}-01`));

            monthlySummaries.push({ year, month: formattedMonth, avgKcalPerDay: averageKcal });
          }
        }
      }
    }

    return monthlySummaries;
  }

  getDataChangeObservable() {
    return this.dataChangeObservable.asObservable();
  }

  private groupEntriesByDate(entries: KcalEntry[]): Record<string, KcalEntry[]> {
    const dateGroups: Record<string, KcalEntry[]> = {};

    for (const entry of entries) {
      const date = entry.date;

      if (!dateGroups[date]) {
        dateGroups[date] = [];
      }

      dateGroups[date].push(entry);
    }

    return dateGroups;
  }

  private groupEntriesByYearAndMonth(entries: KcalEntry[]): Record<string, Record<string, KcalEntry[]>> {
    const monthGroups: Record<string, Record<string, KcalEntry[]>> = {};

    for (const entry of entries) {
      const date = new Date(entry.date);
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString();

      if (!monthGroups[year]) {
        monthGroups[year] = {};
      }

      if (!monthGroups[year][month]) {
        monthGroups[year][month] = [];
      }

      monthGroups[year][month].push(entry);
    }

    return monthGroups;
  }
}

interface KcalEntry {
  date: string;
  name: string;
  kcalPer100g: number;
  weight: number;
}

interface DailyKcalSummary {
  date: string;
  totalKcal: number;
}

interface MonthlyKcalSummary {
  year: string;
  month: string;
  avgKcalPerDay: number;
}