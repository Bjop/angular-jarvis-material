import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jarvis-theme-example';

  items = [{id:"a", val:"A"},{id:"b", val:"B"}]
}
