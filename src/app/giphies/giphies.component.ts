import { Component, OnInit } from '@angular/core';
import { GiphyDataService } from '../giphy-data.service';

@Component({
  selector: 'app-giphies',
  templateUrl: './giphies.component.html',
  styleUrls: ['./giphies.component.css']
})
export class GiphiesComponent implements OnInit {
 gifs: any[] = [];
  constructor(private giphydataservice : GiphyDataService) { }

  ngOnInit() {
    this.giphydataservice.getTrendingGiphy();
    this.giphydataservice.getGiphies()
    .subscribe((response : any) => {
      console.log('Data1',response)
      this.gifs = response;
    }

    )
  }

}
