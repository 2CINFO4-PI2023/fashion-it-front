// role.component.ts
import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  roleList: Role[] = [];
  showAddRoleModal = false;
  selectedRole: Role | null = null;
  editedRole: Role | null = null;
  showEditRoleModal = false;

  newRole: Role = {
    _id: '',
    roleName: '',
  };

  constructor(private roleService: RoleService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roleService.getAllRoles().subscribe((roles) => {
      this.roleList = roles.response;
      console.log(this.roleList)
    });
  }

  openAddRoleModal(): void {
    this.showAddRoleModal = true;
  }

  closeAddRoleModal(): void {
    this.showAddRoleModal = false;
    this.newRole = {
      _id: '',
      roleName: '',
    };
  }

  addRole(): void {
    if (this.newRole.roleName) {
      this.roleService.addRole(this.newRole).subscribe(() => {
        this.toastr.success('Role added successfully!', 'Success');
        this.loadRoles(); // Reload the roles after adding a new one
        this.closeAddRoleModal(); // Close the modal after adding the role
      });
    }
  }

  openDeleteConfirmation(role: Role): void {
    this.selectedRole = role;
    // Implement a confirmation dialog if needed before calling deleteRole()
    this.deleteRole();
  }

  deleteRole(): void {
    if (this.selectedRole) {
      this.roleService.deleteRole(this.selectedRole.roleName).subscribe(() => {
        this.toastr.success('Role deleted successfully!', 'Success');
        this.loadRoles();
        this.selectedRole = null;
      });
    }
  }

  closeDeleteConfirmation(): void {
    this.selectedRole = null; // Reset selected role when the modal is closed
  }

  openEditRoleModal(role: Role): void {
    this.editedRole = { ...role }; // Make a copy of the role to avoid modifying the original one
    this.showEditRoleModal = true;
  }

  closeEditRoleModal(): void {
    this.editedRole = null; // Reset edited role when the modal is closed
    this.showEditRoleModal = false;
  }

  editRole(): void {
    if (this.editedRole) {
console.log(      this.editedRole._id)
console.log(      this.editedRole.roleName)
      this.roleService.editRole(this.editedRole).subscribe(() => {
        this.toastr.success('Role updated successfully!', 'Success');
        this.loadRoles(); // Reload the roles after editing one
        this.closeEditRoleModal(); // Close the modal after editing the role
      });
    }
  }
}
