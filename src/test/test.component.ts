import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-test',
  imports: [
    MatButton
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
}
