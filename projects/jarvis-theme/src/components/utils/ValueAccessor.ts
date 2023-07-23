import {
    ControlValueAccessor,
    FormControlDirective,
    FormControlName,
    NgControl,
    NgModel
} from "@angular/forms";
import {inject} from "@angular/core";

export class ValueAccessor implements ControlValueAccessor {
    writeValue(obj: any) {
    }

    registerOnChange(fn: any): void {
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState(isDisabled: boolean): void {
    }
}

function injectNgControl(){
    const ngControl = inject(NgControl, { self: true, optional: true});

    if(!ngControl) throw new Error('...');

    if(
        ngControl instanceof FormControlDirective ||
        ngControl instanceof FormControlName ||
        ngControl instanceof NgModel
    ){
        ngControl.valueAccessor = new ValueAccessor();
        return ngControl;
    }
    throw new Error('...');
}
