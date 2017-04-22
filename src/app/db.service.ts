import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  myData: any[];
  constructor() {
    this.myData = [{ id: '1', name: 'Asaad Saad', email: 'asaad@mum.edu' }, { id: '2', name: 'Niva', email: 'niva@mum.edu' }];
  }

  getData() {
    return this.myData;
  }

  getDataById(id: number) {
    for (let item of this.myData) {
      if (item.id == id) {
        return item;
      }
    }
  }

}
