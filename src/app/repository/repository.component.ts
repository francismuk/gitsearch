import { User } from './../user';
import { Repository } from './../repository';
import { SearchService } from './../search-service/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  public searchMe = 'francismuk';
  public githubRepo: string;

  repository: Repository;
  public searchRepo: string;
  public resultCount = 12;
  users: User;

    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;
        this.getDataFunction();

    }
  getDataFunction() {
    throw new Error('Method not implemented.');
  }

    constructor(public githubRepoRequest: SearchService, public userRepos: SearchService) { }

  ngOnInit() {
      this.githubRepoRequest.githubUser(this.searchMe);
      this.users = this.githubRepoRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }
}
