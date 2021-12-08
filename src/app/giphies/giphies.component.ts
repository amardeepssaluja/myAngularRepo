import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyDataService } from '../giphy-data.service';

@Component({
  selector: 'app-giphies',
  templateUrl: './giphies.component.html',
  styleUrls: ['./giphies.component.css']
})
export class GiphiesComponent implements OnInit, OnDestroy {
 gifs: any[] = [];
 subscription: Subscription;
  constructor(private giphydataservice : GiphyDataService) { }

  ngOnInit() {
    this.giphydataservice.getTrendingGiphy();
    this.subscription = this.giphydataservice.getGiphies()
    .subscribe((response : any) => {
      console.log('Data1',response)
      this.gifs = response;
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
