import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  UserData:any=[];
  constructor( private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://demo2421825.mockable.io/attendancelist').subscribe((Data: any=[])=>{
    console.log(Data);
    this.UserData=Data;

    });
}
}
