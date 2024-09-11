import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {SignalComponentComponent} from "./signal-component/signal-component.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SignalComponentComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-next-angular';
  firstName = "1"

  constructor() {
  setTimeout(() => {
    this.firstName = "2"
  }, 3000)
  }
}
