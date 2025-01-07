import { Component } from '@angular/core';
import {TestComponent} from '../test/test.component';

@Component({
  selector: 'app-root',
  imports: [TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularTW4SBVite';
}
