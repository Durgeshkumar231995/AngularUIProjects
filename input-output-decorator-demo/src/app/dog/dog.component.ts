import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {
dogName:string="Alcician Dog";
@Output()
eventEmitterObj:EventEmitter<string>=new EventEmitter();


passDataToParent()
{
  this.eventEmitterObj.emit(this.dogName);
}
}
