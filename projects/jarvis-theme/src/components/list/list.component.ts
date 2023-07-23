import {Component, EventEmitter, Input, Output} from "@angular/core";
import UtilService from "../utils/Util.service";

@Component({
    standalone: true,
    selector: 'j-list',
    templateUrl: './list.component.html',
    imports: [

    ],
    styleUrls: ['../../styles/main.scss', './list.component.scss']
})
export class List {
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
