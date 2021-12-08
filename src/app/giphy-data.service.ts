import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class GiphyDataService {
 
gifs = new BehaviorSubject<any>([]);
  constructor(private http : HttpClient) { }

  getTrendingGiphy(){
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=Cxv0pcwJrzWt4Jpj41GdQEJTlUcva5mE&limit=15')
    .subscribe((response : any) => {
      this.gifs.next(response.data)
    });
  }
  searchGiphy(searchTerm: string){   
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=Cxv0pcwJrzWt4Jpj41GdQEJTlUcva5mE&q=${ searchTerm }&limit=15`)
    .subscribe((response : any) => {
      console.log('searchdata', searchTerm)
      this.gifs.next(response.data)
    });;
  }

  getGiphies(){
    return this.gifs.asObservable();
  }
}
