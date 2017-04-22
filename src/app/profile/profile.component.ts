import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { DbService } from '../db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string;
  studentDetail: {};
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private dbService: DbService) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );

    this.studentDetail = this.dbService.getDataById(parseInt(this.id));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

