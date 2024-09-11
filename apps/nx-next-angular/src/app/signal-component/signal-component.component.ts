import {ChangeDetectionStrategy, Component, effect, input, model, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-signal-component',
  standalone: true,
  imports: [CommonModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './signal-component.component.html',
  styleUrl: './signal-component.component.css',
})
export class SignalComponentComponent  {
  quantity = signal<number>(1);
  firstName = input.required<string>();
  model = model.required<string>()

  constructor() {
    setTimeout(() => {
      this.model.set("mod child");
    }, 3000)
    effect(() => {
      console.log('sign',this.firstName());
      console.log('model',this.model());
    });
  }


}
