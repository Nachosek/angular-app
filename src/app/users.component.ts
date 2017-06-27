import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})

export class UsersComponent implements OnInit { 
	title = 'Lista użytkowników'; 
	users: User[];
	selectedUser: User;

	constructor(
		private router: Router,
		private userService: UserService,
		){}

	getUsers(): void {
		this.userService.getUsers().then(users => this.users = users);
	}

	gotoDetail(): void {
  		this.router.navigate(['/detail', this.selectedUser.id]);
	}	

	ngOnInit(): void {
		this.getUsers();
	}

	onSelect(user: User): void {
		this.selectedUser = user;
	}

	add(firstName: string): void {
  	firstName = firstName.trim();
  	if (!firstName) { return; }
  		this.userService.create(firstName).then(user => {this.users.push(user);
      	this.selectedUser = null;
    	});
	}

	delete(user: User): void {
  	this.userService.delete(user.id)
      .then(() => {
        this.users = this.users.filter(h => h !== user);
        if (this.selectedUser === user) { this.selectedUser = null; }
      });
	}
}

