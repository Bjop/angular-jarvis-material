import {
    Component,
    ElementRef,
    EventEmitter, forwardRef,
    Input, OnChanges,
    Output,
} from '@angular/core';
import {AsyncPipe, JsonPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {List} from "../list/list.component";
import UtilService from "../utils/Util.service";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import genUniqueId from "../utils/Unique-id-generator.service";
import {Button} from "../button/button.component";

@Component({
    standalone: true,
    selector: 'j-dropdown',
    templateUrl: './dropdown.component.html',
    providers: [{
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => Dropdown),
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
        Button,
    ],
    styleUrls: ['./dropdown.component.scss', '../../styles/scrollbar.scss'],
})
export class Dropdown implements OnChanges, ControlValueAccessor{
    @Input()
    placeHolder: string = 'Select an item';
    @Input()
    items: any[] | undefined;
    @Input()
    editable: boolean = false;
    @Input()
    itemLabel: string | undefined;
    @Input()
    itemValue: string | undefined;
    @Input()
    scrollHeight: string = '200px';
    @Input()
    fadeOnScroling: boolean = true;
    @Input()
    disabled = false;
    @Output()
    selectedItem = new EventEmitter<any>();
    @Output()
    change = new EventEmitter<any>();
    @Output()
    touch = new EventEmitter<void>();


    _selectedItem: any | undefined = undefined;
    _showOptions = false;
    _optionsId = genUniqueId();

    onChange = (val: any) => {this.change.emit(val)};
    onTouched = () => {this.touch.emit()};
    touched = false;

    get label(): string | null {
        return this.selectedItem ? this.getItemLabel(this._selectedItem) : null;
    }

    constructor(private elementRef: ElementRef) {
    }

    writeValue(value: any): void {
        if(value === null)
            value = undefined;
        this._selectedItem = value;
        this.selectedItem.emit(value);
    }
    registerOnChange(fn: any): void {
        this.touched = true;
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.touched = true;
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    ngOnChanges() {
        this.change.emit(this._selectedItem)
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
        const val = this.getItemValue($event);
        if ($event !== this._selectedItem){
            this.ngOnChanges()
        }
        this._showOptions = false;
        this.writeValue($event);
        this.onChange(val);
        this.registerOnTouched(val);
    }

    getItemLabel(item: any): any | undefined{
        return this.getPropertyValue(this.itemLabel, item);
    }

    getItemValue(item: any): any{
        if (this.itemValue){
            return this.getPropertyValue(this.itemValue, item);
        }
        return item;
    }

    getPropertyValue(label: string | undefined, item: any): any{
        return UtilService.getValueByProperty(label, item);
    }

    onFocus(){
        this._showOptions = !this._showOptions;
    }
}
