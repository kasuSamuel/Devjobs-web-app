import { ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  displayedCards: any;
 selectedJob: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  ngOnInit(): void {
    const cardId = this.route.snapshot.params['id']; 
    this.dataService.selectedJob$.subscribe((card) =>{
      this.selectedJob = card;

    });
   

  }

}