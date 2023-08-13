import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'j-loader-ring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader-ring.component.html',
  styleUrls: ['./loader-ring.component.scss'],
  animations: [
    trigger('clockwiseAnimation', [
      state('start', style({transform: 'rotate(0deg)'})),
      state('end', style({transform: 'rotate(360deg)'})),
      transition('start => end', animate('5s')),
      state('startCounter', style({transform: 'rotate(360deg)'})),
      state('endCounter', style({transform: 'rotate(0deg)'})),
      transition('startCounter => endCounter', animate('5s')),
    ]),
  ]
})
export class LoaderRingComponent implements OnInit{
  @Input()
  ring: any;

  ngOnInit() {
    console.log(this.ring)
  }

  onEnd($event: any) {
    if (this.ring.state === 'end'){
      this.ring.state = 'start';
    }
    if(this.ring.state === 'endCounter'){
      this.ring.state = 'startCounter';
    }
    if ($event.toState === 'start') {
      setTimeout(() => {
        this.ring.state = 'end';
      }, 0);
    }
    if ($event.toState === 'startCounter') {
      setTimeout(() => {
        this.ring.state = 'endCounter';
      }, 0);
    }
  }

}
