import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }
  
  private data: [{id:string,name:string,email:string}]  = [
    {id:'1',name:'Asaad',email:'asaad@mum.edu'},
    {id:'2',name:'Niva',email:'niva@gmail.com'}
  ];

  getData(){
    return this.data;
  }

  getDataById(id:string){

    let student = this.data.filter((s)=>s.id==id);
    return student[0];
  }

}
