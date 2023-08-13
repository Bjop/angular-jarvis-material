import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {animate, AnimationBuilder, AnimationPlayer, state, style, transition, trigger} from "@angular/animations";

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
export class LoaderRingComponent implements OnInit, AfterViewInit{
  @Input()
  ring: any;

  @ViewChild('ringElement')
  elementRef: ElementRef | undefined;

  ringElement: AnimationPlayer | undefined;
  centerClass: string = '';


  constructor(private readonly animationBuilder: AnimationBuilder) {
  }

  ngOnInit(): void {
    this.centerClass = this.getCenterClass();
  }
  ngAfterViewInit(): void {
    if(!this.ring.isCenter && this.ring.label == undefined ) {
      if (this.ring.state === 'end') {
        this.ring.state = 'start';
      }
      if (this.ring.state === 'endCounter') {
        this.ring.state = 'startCounter';
      }
      if (this.elementRef) {
        let animationFactory;
        if (this.ring.state === 'start') {
          animationFactory = this.animationBuilder
              .build([
                style({transform: 'rotate(0deg)'}),
                animate(this.ring.speed + 'ms', style({transform: 'rotate(360deg)'}))
              ]);
        } else {
          animationFactory = this.animationBuilder
              .build([
                style({transform: 'rotate(360deg)'}),
                animate(this.ring.speed + 'ms', style({transform: 'rotate(0deg)'}))
              ]);
        }

        this.ringElement = animationFactory.create(this.elementRef.nativeElement);
        this.ringElement.play();
        this.ringElement.onDone(() => {
          this.ringElement?.reset();
          this.ringElement?.play();
        })
      }
    }
  }

  getCenterClass(): string{
    if(this.ring.isCenter){
      return 'loader-center-filled';
    }

    if (this.ring.label != undefined){
      return 'loader-center-labeled'
    }
    return ''
  }
}
