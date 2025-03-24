import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world-app';
  logoUrl: string = 'assets/logo.png'; // Logo Path

  openBridgeLabzSite() {
    window.open('https://www.bridgelabz.com', '_blank'); // Opens in new tab
  }
}
