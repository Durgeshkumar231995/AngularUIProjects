import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchText:string='';
@Output()
ev:EventEmitter<string>=new EventEmitter();
SearchMethod()
{
  alert(this.searchText);

  this.ev.emit(this.searchText);
}
}
