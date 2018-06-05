import { Component } from '@angular/core';

import 'paper-checkbox/paper-checkbox.html';
import 'paper-input/paper-input.html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  value: string;
  checked: boolean;
}
