import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  ngOnInit(): void {
    this. onSearch('')
  }

  movies: Movie[] = [
    { id: 1, name: 'Beast', actor: 'Vijay', rating: 8.5 },
    { id: 2, name: 'GOAT', actor: 'Vijay', rating: 7.6 },
    { id: 3, name: 'Master', actor: 'Dhanush', rating: 9.0 }
  ];
 
  filteredMovies: Movie[]=[];


  onSearch(searchTerm: string): void {

    if(!searchTerm){
     this.filteredMovies= this.movies
     this.movies =this.filteredMovies
    }else{
      this.filteredMovies = this.movies.filter(movie =>
       
        movie.name.toLowerCase()===searchTerm.toLowerCase()
      );
    }
    
    
  }

}
