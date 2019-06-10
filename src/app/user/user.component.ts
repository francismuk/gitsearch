import { SearchService } from './../search-service/search.service';
import { User } from './../user';
import { Repository } from './../repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [SearchService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public searchMe = 'francismuk';
  public githubUser: string;

  users: User ;
    public resultCount = 12;


  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }
  constructor(public githubUserRequest: SearchService) { }

  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      console.log(this.users);
  }
}
