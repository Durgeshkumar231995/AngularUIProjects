import { Component } from '@angular/core';
import { fruit } from '../../model/fruit';

@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrl: './fruit-manager.component.css'
})
export class FruitManagerComponent {
fruitList:fruit[]=[
  {name:"apple",price:200,qty:10},
  {name:"mango",price:100,qty:14},
  {name:"watermelon",price:120,qty:5}
]
}
