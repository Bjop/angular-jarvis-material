import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    form = this.formbuilder.group({
        letter: new FormControl(undefined)
    });
    val = undefined;

    title = 'jarvis-theme-example';

    items = [
        {id:"a", val:"A"}
        ,{id:"b", val:"B"}
        ,{id:"c", val:"C"}
        ,{id:"d", val:"D"}
        ,{id:"e", val:"E"}
        ,{id:"f", val:"F"}
        ,{id:"g", val:"G"}
        ,{id:"h", val:"H"}
        ,{id:"i", val:"I"}
        ,{id:"j", val:"J"}
        ,{id:"k", val:"K"}
        ,{id:"l", val:"L"}
        ,{id:"m", val:"M"}
        ,{id:"n", val:"N"}
        ,{id:"o", val:"O"}
        ,{id:"p", val:"P"}
        ,{id:"q", val:"Q"}
    ]

    constructor(private formbuilder: FormBuilder) {
    }

    ngOnInit() {

    }

    onSubmit(){
        console.log(this.form.getRawValue())
    }
}
