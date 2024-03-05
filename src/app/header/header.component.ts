import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

    isDarkMode = false;
    darkModeImg = '../assets/desktop/btn-light-mode.svg';

    constructor(private darkModeToggle: DataService, private router: Router) { }

    onClickBtn() {
        this.isDarkMode = !this.isDarkMode;
        this.toggleDarkMode();
    }

    toggleDarkMode() {
        // Call the service to toggle dark mode
        this.darkModeToggle.toggleDarkMode();

        // Emit an event to notify parent components
        this.toggleColor.emit();

        // Manipulate DOM elements directly (not recommended)
        const body = document.querySelector('body');
        if (body) {
            body.style.backgroundColor = this.isDarkMode ? '#121721' : ''; // Adjust background color as needed
        }

        console.log("Current header bool:", this.isDarkMode);
    }

    onChangeBtn() {
        // Navigate back to the home page without reloading
        this.router.navigateByUrl('/', { skipLocationChange: true });
    }


    @Output() toggleColor = new EventEmitter<void>();
}
