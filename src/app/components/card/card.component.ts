import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../services/dummy.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  posts: any;
  filterPosts: any[] = [];
  users: any;
  flag!: boolean;
  flagHidden!: boolean;
  valTags!: any;
  showAll: boolean = false
  constructor(private service: DummyService) { }

  ngOnInit(): void {
    this.service.getAllPost()
      .subscribe((response: any) => {
        this.posts = response.data;
        console.log(this.posts)
      });
    this.flag = true
    this.flagHidden = false;
  }

  openModal(id: string) {
    this.flagHidden = true;
    this.service.getUser(id).subscribe(response => {
      this.users = response
    })

  }

  filterTag(tagTitle: string) {
    this.service.getAllTag(tagTitle).subscribe((response: any) => {
      this.valTags = response.data
      this.flag = false
    })
  }

  getComments(id: string) {
    this.service.getComments(id).subscribe((response:any) => {
      this.users = response.data

    })
  }


}
