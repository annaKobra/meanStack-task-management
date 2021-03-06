import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  setToCompletedTask() {
    this.notify.emit(this.task._id);
    window.location.reload();
  }
}
