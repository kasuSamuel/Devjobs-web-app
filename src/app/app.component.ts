import { Component, HostBinding } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'devjobs-web-app';

  isDarkMode = false;

  constructor(private darkModeService: DataService) {
    this.darkModeService.isDarkMode$.subscribe(value => {
      console.log(value);
      this.isDarkMode = value;

    })
  }

  @HostBinding('class.dark') get mode() {
    return this.isDarkMode
  }

}
