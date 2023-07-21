import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  userList: User[] = [];
  selectedUserId:any;

  showConfirmPremiumModal = false;
  userToConfirmPremium: any;

  constructor(private userService: UserService,
              private toastr: ToastrService) {}
  ngOnInit(): void {
    this.userService.findAll().subscribe(
      (users) => {
        this.userList = users.response;
        console.log(this.userList)
      },
      (error) => {
        console.error('Error fetching user list:', error);
      }
    );  }

  deleteUser(userId: any): void {
    // this.userList = this.userList.filter(user => user._id !== userId);
    this.userService.deleteUser(userId).subscribe(
      (response=>{
        this.toastr.success(`Delete Successfully ${response}`, 'Success!');
        location.reload();
      }),(error =>{
        this.toastr.error( error, 'Error!');
      } )
    )
  }

  openConfirmPremiumModal(userId: any): void {
    // this.userToConfirmPremium = this.userList.find(user => user._id === userId);
    this.selectedUserId = userId;
    this.showConfirmPremiumModal = true;
  }

  confirmPremium(): void {
    this.userService.activatePremium(this.selectedUserId).subscribe(
      (response) => {
        if (response.success) {
          this.toastr.success(`User is now premium ${response.message}`, 'Success!');
        } else {
          this.toastr.error(response.message, 'Error!');
        }
      },
      (error) => {
        this.toastr.error('Failed to activate user premium', 'Error!');
      }
    );
    this.closeConfirmPremiumModal();
  }

  closeConfirmPremiumModal(): void {
    this.showConfirmPremiumModal = false;

  }
}
