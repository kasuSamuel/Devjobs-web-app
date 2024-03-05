import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  data: any[] = [];
  displayedCards: any[] = [];
  filteredCards: any[] = [];
  cardsPerPage: number = 6;
  filterTitle: string = '';
  filterLocation: string = '';
  filterFullTime: boolean = false;

  showLoadMoreBtn: boolean = true; 

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((res: any) => {
      console.log(res); // Check the data returned by the service
      this.data = res;
      // Initially, display all cards without filtering
      this.filteredCards = this.data.slice(0, this.cardsPerPage);
    });
  }

  loadMore() {
    const startIndex = this.filteredCards.length;
    const endIndex = startIndex + 3;
    this.filteredCards.push(...this.data.slice(startIndex, endIndex));
  }

  onCardClicked(card: any): void {
    this.router.navigate(['/details']);
    this.dataService.setSelectedJobs(card);
  }

  search() {
    // Reset filtered cards
    this.filteredCards = [];

    // Check if any filter is filled
    if (this.filterTitle || this.filterLocation || this.filterFullTime) {
      // Filter the data based on the criteria
      this.filteredCards = this.data.filter((card: any) => {
        // Check if title matches
        const titleMatch = !this.filterTitle || 
        card.company.toLowerCase().includes(this.filterTitle.toLowerCase()) || 
        card.position.toLowerCase().includes(this.filterTitle.toLowerCase());

        // Check if location matches
        const locationMatch = !this.filterLocation ||
         card.location.toLowerCase().includes(this.filterLocation.toLowerCase());

        // Check if full time matches
        const fullTimeMatch = !this.filterFullTime ||
         card.contract.toLowerCase() === 'full time';

        // Return true if all conditions match
        return titleMatch && locationMatch && fullTimeMatch;
      });

      this.showLoadMoreBtn = false
    } else {
      // If no filters applied, display all data
      this.filteredCards = this.data.slice(0, this.cardsPerPage);
      this.showLoadMoreBtn = true;
    }
  }






}
