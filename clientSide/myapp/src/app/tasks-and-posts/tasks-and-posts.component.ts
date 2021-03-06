import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../shared/user';
import { Subscription } from 'rxjs';
import { Task } from '../shared/task';
import { Post } from '../shared/post';

@Component({
  selector: 'app-tasks-and-posts',
  templateUrl: './tasks-and-posts.component.html',
  styleUrls: ['./tasks-and-posts.component.css'],
})
export class TasksAndPostsComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;

  userId: string = '';
  user: User = new User();
  toggleTask: boolean = false;
  userTask: Task = new Task();
  togglePost: boolean = false;
  userPost: Post = new Post();

  constructor(private userUtils: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.sub1 = this.route.params.subscribe((param) => {
      this.userId = param['userId'];
      this.sub2 = this.userUtils.getUser(this.userId)
        .subscribe(data => this.user = data);
    });
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
    if (this.sub3) {
      this.sub3.unsubscribe();
    }
  }

  navigateToUsers() {
    this.router.navigate(['/']);
  }

  changeTaskStatus(taskId: string) {
    const selectedTask = this.user.tasks.find((task) => task._id === taskId);
    if (selectedTask) {
      selectedTask.completed = true;
      this.sub3 = this.userUtils.updateUser(this.userId, this.user)
        .subscribe(data => console.log(data));
    }
  }

  submitNewTask(isValid: boolean) {
    if (isValid) {
      const newTask = { title: this.userTask.title, completed: false };
      this.user.tasks.push(newTask);
      this.sub3 = this.userUtils.updateUser(this.userId, this.user)
        .subscribe(data =>{ this.toggleTask = false; window.location.reload()});
    }
  }

  submitNewPost(isValid: boolean) {
    if (isValid) {
      const newPost = { title: this.userPost.title, body: this.userPost.body };
      this.user.posts.push(newPost);
      this.sub3 = this.userUtils.updateUser(this.userId, this.user)
        .subscribe(data => this.togglePost = false);
    }
  }
}
