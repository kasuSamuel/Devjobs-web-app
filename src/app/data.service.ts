import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  filterItems(filterTitle: string, filterLocation: string, filterFullTime: boolean): any[] {
    throw new Error('Method not implemented.');
  }
  private dataUrl = '../../assets/data.json';

  constructor(private http: HttpClient) {}

  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  toggleDarkMode(){
    return this.isDarkModeSubject.next(!this.isDarkModeSubject.value);
  }

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  private selectedJob = new BehaviorSubject<any>(null);
  public selectedJob$ = this.selectedJob.asObservable();
  
  setSelectedJobs(job: any): void{
    this.selectedJob.next(job);
  }
}
