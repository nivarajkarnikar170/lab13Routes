import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { DbService } from './db.service';

@Component({
  selector: 'app-profile',
  template: `
    STUDENT PROFILE <br>
    Name: {{student.name}} <br>
    Email: {{student.email}}
  `
})
export class ProfileComponent{

  id: string;
  student: {};
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,private dbService: DbService, private router:Router) { 

    this.subscription = activatedRoute.params.subscribe(
        (param: any) => {
          this.id = param['id'];
          this.student = dbService.getDataById(this.id);
          // console.log("student=="+this.student);
          // console.log("falsiness"+(!this.student));
          // if(!(this.student)){
          //   console.log("redirecting to error page");
          //   this.router.navigate(['error']);
          // }
        }
    );
  }

}
