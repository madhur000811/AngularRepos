import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { ItemList } from 'src/app/shared/itemlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  item: Item = {};
  items: Item[];

  ngOnInit(){
    this.items = ItemList;
  }

}
