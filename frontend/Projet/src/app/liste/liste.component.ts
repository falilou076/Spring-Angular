import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  public Listuser: User[];
  public user: User;

  constructor(private UserService: UserServiceService) {}

  ngOnInit(){
    this.getUsers();
  }

  public getUsers(): void{
    this.UserService.getUser().subscribe(
      (response: User[]) => {this.Listuser = response},
      (err: HttpErrorResponse) => {console.log(err.message)}
    )
  }

  public getThisUser(id: number): void{ 
    this.UserService.getOne(id).subscribe(
      (response: User) => {this.user = response;},
      (err: HttpErrorResponse) => {console.log(err.message)}
    )
  }

  public deleteUser(id: number): void{
    this.UserService.deleteUser(id).subscribe(
      () => {
        console.log("success");
        this.getUsers();
      },
      (err: HttpErrorResponse) => {console.log(err.message)}
    )
  }

  public updateUser(addForm: NgForm){
    this.UserService.updateUser(this.user.id, addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers(); 
      },
      (err: HttpErrorResponse) =>{
        console.log(err.message);
      }
        
    )
  }

}
