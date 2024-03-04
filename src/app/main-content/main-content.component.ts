import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  data: any[] = [];
  displayedCards: any[] = [];
  cardsPerPage: number = 6;

  constructor(private router:Router ,private dataService: DataService) {
    this.dataService.getJsonData().subscribe((res: any) => {
      this.data = res;
      this.displayedCards = this.data.slice(0, this.cardsPerPage); 
    });
  }

  loadMore() {
    const startIndex = this.displayedCards.length;
    const endIndex = startIndex + 3; 
    this.displayedCards.push(...this.data.slice(startIndex, endIndex));
  }

  onCardClicked(card: any): void {
    this.router.navigate(['/details']);
    console.log( card);
    this.dataService.setSelectedJobs(card)
console.log(this.dataService.selectedJob$)
  }
  
}
