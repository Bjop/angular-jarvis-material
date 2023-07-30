import {
    Component,
    ElementRef,
    EventEmitter,
    Input, OnChanges,
    Output,
} from '@angular/core';
import {AsyncPipe, JsonPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {List} from "../list/list.component";
import UtilService from "../utils/Util.service";
import {ValueAccessor} from "../utils/ValueAccessor";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import genUniqueId from "../utils/Unique-id-generator.service";

@Component({
    standalone: true,
    selector: 'j-dropdown',
    templateUrl: './dropdown.component.html',
    providers: [{
       provide: NG_VALUE_ACCESSOR,
       useClass: ValueAccessor,
       multi: true
    }],
    imports: [
        NgClass,
        NgStyle,
        NgIf,
        List,
        NgForOf,
        JsonPipe,
        AsyncPipe,
    ],
    styleUrls: ['./dropdown.component.scss', '../../styles/scrollbar.scss'],
})
export class Dropdown implements OnChanges{
    @Input()
    placeHolder: string = 'Select an item';
    @Input()
    items: any[] | undefined;
    @Input()
    editable: boolean = false;
    @Input()
    itemLabel: string | undefined
    @Input()
    scrollHeight: string = '200px';
    @Input()
    fadeOnScroling: boolean = true;
    @Output()
    selectedItem = new EventEmitter<any>();

    _selectedItem: any;
    _showOptions = false;
    _optionsId = genUniqueId();

    get label(): string | null {
        return this.selectedItem ? this.getItemLabel(this._selectedItem) : null;
    }

    constructor(private elementRef: ElementRef) {
    }

    ngOnChanges() {
    }

    onScroll() {
        if(this.fadeOnScroling) {
            const elements = this.elementRef.nativeElement.querySelectorAll('j-list');
            const overlayElement = this.elementRef.nativeElement.querySelectorAll('#' + this._optionsId)[0];

            elements.forEach((el: any) => {

                const rect = el.getBoundingClientRect();
                const isVisible = rect.top >= overlayElement.offsetTop && rect.bottom <= overlayElement.offsetHeight + overlayElement.offsetTop;

                if (isVisible) {
                    el.classList.remove('fade-out')
                    el.classList.add('fade-in');
                } else {
                    el.classList.remove('fade-in')
                    el.classList.add('fade-out')
                }
            });
        }
    }

    onItemSelect($event: any){
        this._showOptions = false;
        this._selectedItem = $event;
        this.selectedItem.emit($event);
    }

    getItemLabel(option: any): string{
        return UtilService.getValueByProperty(this.itemLabel, option);
    }

    onFocus(){
        this._showOptions = !this._showOptions;
    }
}
