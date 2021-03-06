import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  sub: Subscription;

  users: User[] = [];
  searchTerm: string;

  constructor(private userUtils: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getData() {
    this.sub = this.userUtils.getAllUsers()
      .subscribe((users) => (this.users = users));
  }
  async searchUser() {
    if (this.searchTerm != null) {
      this.users = await this.userUtils.search(this.searchTerm);
    } else {
      this.getData();
    }
  }
  addNewUser() {
    this.router.navigate(['add']);
  }
}
