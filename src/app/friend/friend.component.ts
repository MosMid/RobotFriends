import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';
import { User } from '../IFriend';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.sass'
})
export class FriendComponent implements OnInit {
  public friendId?: number;
  public friendProfile?: User;

  constructor(private route: ActivatedRoute, private data: FetchDataService) { };

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = parseInt(idParam);
      this.friendId = id;
    } else {
      this.friendId = 0;
    }
    console.log(this.friendId)
    this.data.getDataById(this.friendId)
      .subscribe(res => this.friendProfile = res)
  }
}
