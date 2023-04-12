import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  journalsData: any[] = [];
  conferencesData: any[] = [];
  conferenceYears: any[] = [];
  lengthOfConference: number = 0;

  constructor(
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {
    console.log("here");
    this.getData();
  }

  getData() {
    console.log("here");
    this.databaseService.getData("journals/journals").then((res: any) => {
      console.log(res);
      this.journalsData = res;
    })

    this.databaseService.getData("publications/conferences").then((res: any) => {
      console.log(res);
      this.conferencesData = res;
      this.lengthOfConference = this.conferencesData.length;
      this.getYears();
    })
    
  }

  getYears() {
    this.conferenceYears = [];
    for (let i = 0; i < this.conferencesData.length; i++) {
      this.conferenceYears.push(this.conferencesData[i]["year"]);
    }
    console.log(this.conferenceYears);
  }

}
