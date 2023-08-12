import {NgModule} from "@angular/core";
import {Dropdown} from "./components/dropdown/dropdown.component";
import {Button} from "./components/button/button.component";
import {TextInput} from "./components/inputtext/text-input.component";

@NgModule({
  declarations: [

  ],
  imports: [
      Dropdown,
      Button,
      TextInput
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
