import {Component, EventEmitter, Input, Output, ViewEncapsulation} from "@angular/core";
import UtilService from "../utils/Util.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
    standalone: true,
    selector: 'j-list',
    templateUrl: './list.component.html',
    imports: [
        BrowserAnimationsModule
    ],
    styleUrls: ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'j-dropdown'
    },
})
export class List{
    @Input()
    item: any;
    @Input()
    itemLabel: string | undefined;
    @Input()
    itemValue: string | undefined;
    @Output()
    ontItemSelect = new EventEmitter<any>();

    get lable(): string | null{
        return UtilService.getValueByProperty(this.itemLabel, this.item);
    }

    get value(): any{
        if(this.itemValue)
            return UtilService.getValueByProperty(this.itemValue, this.item);
        return this.item;
    }

    onClick() {
        this.ontItemSelect.emit(this.value)
    }
}
