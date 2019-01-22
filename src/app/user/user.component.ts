import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email'];
  users: User[];
  adduser: boolean = false;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers()
      .subscribe( data => {
        this.users = data.result;
      });
  }

  addUser() {
    this.adduser = true;
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
