import { Component, Input } from '@angular/core';
import { fruit } from '../../model/fruit';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  @Input()
fruits:fruit[]=[]
}
