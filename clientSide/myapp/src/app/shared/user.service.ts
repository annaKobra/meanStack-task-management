import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(this.url);
  }
  getUser(userId: string) {
    return this.http.get<User>(`${this.url}/${userId}`);
  }
  addUser(userData: User) {
    return this.http.post<User>(this.url, userData);
  }
  updateUser(userId: string, userData: User) {
    return this.http.put<User>(`${this.url}/${userId}`, userData);
  }
  deleteUser(userId: string) {
    return this.http.delete<User>(`${this.url}/${userId}`);
  }

  async search(text: string) {
    let users = await this.getAllUsers().toPromise();

    let filteredUsers = users.filter(user =>
      user.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      || user.email.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    return filteredUsers;
  }

}
