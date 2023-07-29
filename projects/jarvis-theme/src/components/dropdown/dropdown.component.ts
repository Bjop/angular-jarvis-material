import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AsyncPipe, JsonPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {List} from "../list/list.component";
import UtilService from "../utils/Util.service";
import {ValueAccessor} from "../utils/ValueAccessor";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

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
        AsyncPipe
    ],
    styleUrls: ['./dropdown.component.scss'],
})
export class Dropdown implements OnInit{
    @Input()
    selectMessage: string = 'Select an item';
    @Input()
    items: any[] | undefined;
    @Input()
    editable: boolean = false;
    @Input()
    itemLabel: string | undefined
    @Output()
    selectedItem = new EventEmitter<any>();

    _selectedItem: any;
    _showOptions = false;

    get label(): string | null {
        return this.selectedItem ? this.getItemLabel(this._selectedItem) : null;
    }

    ngOnInit() {}

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
