import {Component, HostBinding} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'input[j-text-input]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInput {
    @HostBinding('class')
    class = 'hide-default j-input-default'
}
