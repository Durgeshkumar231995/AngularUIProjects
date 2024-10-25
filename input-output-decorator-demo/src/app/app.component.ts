import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input-output-decorator-demo';
  data:string="Iam in parent app component"

  description:string="We are all from cts";
}
