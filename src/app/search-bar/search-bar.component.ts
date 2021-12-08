import { Component, OnInit } from '@angular/core';
import { GiphyDataService } from '../giphy-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
gifs : any[] = [];
  constructor(private giphydataservice : GiphyDataService) { }

  ngOnInit() {
  }
  search(searchTerm : string){    
    if(searchTerm !== ''){
      this.giphydataservice.searchGiphy(searchTerm)      
    }
  }
}
