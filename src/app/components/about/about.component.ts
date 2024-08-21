import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatButtonModule, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  age: number = this.calculateYears(new Date(1998, 5, 28));
  workExperience: number = this.calculateYears(new Date(2019, 8, 1));

  calculateYears(startDate: Date): number {
    const today: Date = new Date();
    let years: number = today.getFullYear() - startDate.getFullYear();
    const monthDifference: number = today.getMonth() - startDate.getMonth();
    const dayDifference: number = today.getDate() - startDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      years--;
    }
    return years;
  }
}
