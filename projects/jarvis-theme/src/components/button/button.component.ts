import {AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'j-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class Button implements AfterContentInit{
    @ContentChild('buttonBody', { static: false, read: ElementRef }) buttonBody: ElementRef | undefined;
    @ContentChild('buttonImage', { static: false, read: ElementRef }) buttonImage: ElementRef | undefined;

    @Input()
    label: string | undefined;
    @Input()
    disabled: boolean = false;
    @Input()
    icon: string | undefined;
    @Input()
    iconPosition: string = 'left';
    @Output()
    click = new EventEmitter();

    isContentEmpty = true;
    isImageEmpty = true;

    onButtonClick(){
        this.click.emit({})
    }
    ngAfterContentInit() {
        this.isContentEmpty = !this.buttonBody;
        this.isImageEmpty = !this.buttonImage;
    }
}
