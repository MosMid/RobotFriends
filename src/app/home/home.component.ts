import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { User } from '../IFriend';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public friends: User[] = [];

  public immutable: User[] = [];

  public cities: string[] = []

  public clickedCity!: string;

  public searchQuery: string = '';

  constructor(private data: FetchDataService) {}

  ngOnInit() {
    this.data.getData()
      .subscribe(res => {
        this.friends = res;
        this.immutable = res;
        this.friends.forEach(friend => {
          if(!this.cities.includes(friend.address.city)) this.cities?.push(friend.address.city)
        })
      });
  }

  onClick(event: Event){
    if (event.target instanceof HTMLElement) {
      this.friends = this.immutable;
      const city = event.target.innerHTML;
      if(city != this.clickedCity) {
        this.friends=this.friends.filter( friend => friend.address.city == city)
        this.clickedCity = city;
      }else{
        this.clickedCity = ''
      }
    }
  }

  onSearch(query: string) {
    this.searchQuery = query;
    if (this.searchQuery.length >= 3) {
      this.friends = this.immutable.filter(friend =>
        friend.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.clickedCity = ''; // Clear clicked city when searching
    } else {
      // Clear the search results if the query is less than three characters
      this.friends = this.immutable;
    }
  }
  
}
