import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  imports: [CommonModule, FormsModule], // Include FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world-app';
  userName: string = '';
  displayName: string = '';
  logoUrl: string = 'assets/logo.png'; // Logo Path

  updateName(event: any) {
    if (event instanceof KeyboardEvent && event.key === 'Enter') {
      this.displayName = this.userName; 
    }
  }

  openBridgeLabzSite() {
    window.open('https://www.bridgelabz.com', '_blank'); // Opens in new tab
  }
}
