import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';
import { User } from '../IFriend';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input() friend!:User;
  @Output() cardEvent = new EventEmitter<Event>();

  emitEvent(event: Event) {
    this.cardEvent.emit(event);
  }

  constructor(private router: Router, private data: FetchDataService){}

  onSelect(){
    this.router.navigate(['/friend', this.friend.id])
  }

  onClick(event: Event) {
    event.stopPropagation();
    this.data.toggleFav(this.friend.id)
    .subscribe(res => {
      this.friend.isFavorite = res.isFavorite
      this.emitEvent(event)
    })
  }
}