import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { User } from '../IFriend';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.sass'
})

export class FavComponent implements OnInit{

  public friends: User[] = [];

  public immutable: User[] = [];

  public searchQuery: string = '';

  constructor(private data: FetchDataService) {}

  ngOnInit() {
    this.data.getData()
      .subscribe(res => {
        this.friends = res.filter(friend => friend.isFavorite === true);
        this.immutable = this.friends
      });
  }

  handleCardEvent(event: Event) {
    if (event.target instanceof HTMLElement){
      const id = parseInt(event.target.id);
      this.friends = this.friends.filter(item => item.id !== id);
      this.immutable = this.immutable.filter(item => item.id !== id);
    }
  }

  onSearch(query: string) {
    this.searchQuery = query;
    if (this.searchQuery.length >= 3) {
      this.friends = this.immutable.filter(friend =>
        friend.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.friends = this.immutable;
    }
  }
}
