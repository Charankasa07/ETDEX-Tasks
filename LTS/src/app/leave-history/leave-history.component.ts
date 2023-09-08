import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Leave, UserRegister } from '../User';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css'],
})
export class LeaveHistoryComponent implements OnInit {
  constructor(private cookieService: CookieService) {}
  currentUser: UserRegister = {
    leaves: [],
    role: '',
    name: '',
    mobile: '',
    email: '',
    password: '',
    numberOfLeaves: 0,
  };
  AcceptedLeaves: Leave[] = [];
  RejectedLeaves: Leave[] = [];
  PendingLeaves: Leave[] = [];
  ngOnInit(): void {
    this.currentUser = JSON.parse(this.cookieService.get('currentUser'));
    //filtering the leaves of the currentUser based on their status
    //so as to represent the number of leaves in each category
    this.AcceptedLeaves = this.currentUser.leaves.filter(
      (leave) => leave.status === 'accepted'
    );
    this.RejectedLeaves = this.currentUser.leaves.filter(
      (leave) => leave.status === 'rejected'
    );
    this.PendingLeaves = this.currentUser.leaves.filter(
      (leave) => leave.status === 'pending'
    );
  }
}
