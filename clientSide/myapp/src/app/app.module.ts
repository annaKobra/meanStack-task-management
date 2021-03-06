import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';


import { MatInputModule } from '@angular/material/input';




import { AppComponent } from './app.component';

import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksAndPostsComponent } from './tasks-and-posts/tasks-and-posts.component';
import { TaskComponent } from './task/task.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  {path: 'add', component: AddUserComponent},
  {path: 'userData/:userId', component: TasksAndPostsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    AddUserComponent,
    MainpageComponent,
    TasksAndPostsComponent,
    TaskComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
