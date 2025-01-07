import { Component } from '@angular/core';
import {MatChip} from '@angular/material/chips';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-test',
  imports: [
    MatChip,
    MatButton
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
}
