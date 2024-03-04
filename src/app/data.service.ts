import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = '../../assets/data.json';

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  private selectedJob = new BehaviorSubject<any>(null);
  public selectedJob$ = this.selectedJob.asObservable();
  
  setSelectedJobs(job: any): void{
    this.selectedJob.next(job);
  }
}
