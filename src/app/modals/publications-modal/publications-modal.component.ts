import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
@Component({
  selector: 'app-publications-modal',
  templateUrl: './publications-modal.component.html',
  styleUrls: ['./publications-modal.component.css']
})
export class PublicationsModalComponent implements OnInit {

  constructor(
    private databaseService: DatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  length: number;
  title: string;
  url: string;
  publication: string;
  authors: string;
  year: string;

  publicationData: any;
  index: number;
  type: string;


  
  ngOnInit(): void {
    if (this.data.type == "add") {
      this.publicationData = this.data.data;
      this.length = this.data.length;
      this.type = this.data.type;
    }
    if (this.data.type == "edit") {
      this.publicationData = this.data.data;
      this.index = this.data.index;
      this.title = this.data.data[this.index].title
      this.publication = this.data.data[this.index].journal
      this.authors = this.data.data[this.index].authors
      this.url = this.data.data[this.index].url
      this.year = this.data.data[this.index].year
      this.length = this.data.length; 
      this.type = this.data.type;
    }
  
  }
  
  async addPublication() {
    if (this.type == 'add') {
      this.publicationData.splice(0,0, {authors: this.authors, url: this.url, journal: this.publication, title: this.title, year: this.year})
      await this.databaseService.addPublicationData(`publications/conferences/`, this.publicationData);
      alert("Successfully added Data");
    }

    if (this.type == 'edit') {
      this.publicationData[this.index] = {authors: this.authors, url: this.url, journal: this.publication, title: this.title, year: this.year}
      await this.databaseService.addPublicationData(`publications/conferences/`, this.publicationData);
      alert("Successfully edited Data");
    }
  }



}
