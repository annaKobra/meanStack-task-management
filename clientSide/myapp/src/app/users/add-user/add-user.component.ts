import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  sub: Subscription;
  user: User = new User();

  constructor(private userUtils: UserService, private router: Router) {}

  ngOnInit(): void {}

  addUser() {
    if (this.user.name && this.user.email) {
      const newUser = { name: this.user.name, email: this.user.email };

      this.sub = this.userUtils.addUser(newUser).subscribe(() => {
        this.router.navigate(['/']).then(() => window.location.reload());
      });
    }
  }
  navigateToMainPage() {
    this.router.navigate(['']);
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
