import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/shared/task';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;

  @Input() user: User = new User();
  isTasksUnCompleted: boolean;
  isShow: boolean = false;
  totlipValue: string;

  constructor(private userUtils: UserService, private router: Router) { }

  ngOnInit(): void {
    // get user Tasks
    let userTasks: Task[] = this.user.tasks;
    // Check for UnComplleted Tasks
    this.isTasksUnCompleted = userTasks.some(task => !task.completed);
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

  update(isValid: boolean) {
    if (isValid) {
      const userId = this.user._id;
      this.sub1 = this.userUtils.updateUser(userId, this.user)
        .subscribe(data => console.log(data));
    }
  }

  deleteUser() {
    const userId = this.user._id;
      this.sub2 = this.userUtils.deleteUser(userId)
        .subscribe(data => {
          console.log(data);
          window.location.reload();
        });
  }

  toggleTasksAndPosts(user: User) {
    this.router.navigate(['userData/' + user._id]);
  }
}
