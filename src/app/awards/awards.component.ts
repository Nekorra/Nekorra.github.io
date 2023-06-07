import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  //awardsData: any[] = [];
  searchAwards = '';
  awardsData: any;
  url: any;
  constructor(
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.databaseService.getData('honors/awards').then((data) => {
      this.awardsData= data;
      this.awardsData = this.awardsData.flat();
      console.log(this.awardsData)
    });
  }


}
