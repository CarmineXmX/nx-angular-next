import {Component, effect, input, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-component.component.html',
  styleUrl: './signal-component.component.css',
})
export class SignalComponentComponent  {
  quantity = signal<number>(1);
  firstName = input.required<string>();         // InputSignal<string|undefined>
  constructor() {
    effect(() => {
      console.log(this.firstName());
    });
  }


}
