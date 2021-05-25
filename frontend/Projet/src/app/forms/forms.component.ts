import { HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListeComponent } from '../liste/liste.component';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private UserService: UserServiceService, private RefreshListUser: ListeComponent) {}
  public success = false;
  public fail = false; 

  ngOnInit(): void {
  
  }

  public addUser(addForm: NgForm): void{
    this.UserService.postUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response); 
        this.success = true;
        this.RefreshListUser.ngOnInit();
        setInterval(() => {
          this.success = false 
          }, 1500);
      },
      (err: HttpErrorResponse) =>{
        console.log(err.message);
        this.fail=true;
        setInterval(() => {
          this.fail = false 
          }, 1500);
      }
    )
  }

}
