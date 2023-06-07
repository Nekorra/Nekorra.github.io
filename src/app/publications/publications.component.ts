import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  journalsData: any;
  conferencesData: any;
  lengthOfConference: number = 0;

  searchJournals = '';
  searchPublications = '';

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
      this.journalsData = this.journalsData.flat();
    })

    this.databaseService.getData("publications/conferences").then((res: any) => {
      console.log(res);
      this.conferencesData = res;
      this.conferencesData = this.conferencesData.flat();
      this.lengthOfConference = this.conferencesData.length;
    })
    
  }

}
