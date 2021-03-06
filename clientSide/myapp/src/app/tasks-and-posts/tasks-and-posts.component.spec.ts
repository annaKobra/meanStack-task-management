import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAndPostsComponent } from './tasks-and-posts.component';

describe('TasksAndPostsComponent', () => {
  let component: TasksAndPostsComponent;
  let fixture: ComponentFixture<TasksAndPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksAndPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksAndPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
