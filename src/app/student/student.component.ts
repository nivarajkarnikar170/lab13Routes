import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

 checkId: number;
  studentData : any[];
  constructor(private dbservice: DbService, private router: Router) {     
    this.studentData = this.dbservice.getData();
  }

  ngOnInit() {
  }

}



