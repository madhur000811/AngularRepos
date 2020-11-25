import { Component, OnInit } from '@angular/core';
import { ItemPosts } from 'src/app/Models/itemposts';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  itemposts: ItemPosts[]= [];
  limitRecords: 3;
  constructor(private service: CrudService) { }

  ngOnInit(): void {
    //this.service.data();
    this.service.getdata().subscribe(
      (res) => { 
        this.itemposts = res as ItemPosts[];
        console.log(this.itemposts);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
