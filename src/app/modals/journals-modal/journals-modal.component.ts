import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-journals-modal',
  templateUrl: './journals-modal.component.html',
  styleUrls: ['./journals-modal.component.css']
})
export class JournalsModalComponent implements OnInit {


  length: number;
  title: string;
  url: string;
  journal: string;
  authors: string;

  journalData: any;
  index: number;
  type: string;


  constructor(
    private databaseService: DatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.type == "add") {
      this.journalData = this.data.data;
      this.length = this.data.length;
      this.type = this.data.type;
    }
    if (this.data.type == "edit") {
      this.journalData = this.data.data;
      this.index = this.data.index;
      this.title = this.data.data[this.index].title
      this.journal = this.data.data[this.index].journal
      this.authors = this.data.data[this.index].authors
      this.url = this.data.data[this.index].url
      this.length = this.data.length; 
      this.type = this.data.type;
    }
  }

  async addJournal() {
    if (this.type == 'add') {
      this.journalData.splice(0,0, {authors: this.authors, url: this.url, journal: this.journal, title: this.title})
      await this.databaseService.addJournalData(`journals/journals/`, this.journalData);
      alert("Successfully added Data");
    }

    if (this.type == 'edit') {
      this.journalData[this.index] = {authors: this.authors, url: this.url, journal: this.journal, title: this.title}
      await this.databaseService.addResearchData(`journals/journals/`, this.journalData);
      alert("Successfully edited Data");
    }
    
  }

}
