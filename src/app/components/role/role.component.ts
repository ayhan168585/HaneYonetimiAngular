import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-role',
  standalone: false,
  
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit {
  roles:Role[]

  constructor(private roleService:RoleService){}
  ngOnInit(): void {
   this.getRoles()
  }

  getRoles(){
    this.roleService.getRoles().subscribe((response=>{
      this.roles=response.data
    }))
  }

}
