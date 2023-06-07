import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  director: any[] = [];
  masters: any[] = [];
  ms_alumni: any[] = [];
  phd_alumni: any[] = [];
  phds: any[] = [];
  post_doc_alumni: any[] = [];
  undergrad_alumni: any[] = [];
  undergraduates: any[] = [];
  
  constructor(
    private databaseService: DatabaseService,
  ) { }

  ngOnInit() {
    this.director = []
    this.masters = []
    this.ms_alumni = []
    this.phd_alumni = []
    this.phds = []
    this.post_doc_alumni = []
    this.undergrad_alumni = []
    this.undergraduates = []
    
    this.getData();
  }

  async getData() {
    await this.databaseService.getData('people').then((data) => {
      const result = Object.keys(data).map((key) => {
        return { [key]: data[key as keyof typeof data] };
      });
      result.forEach(mobile => {
        for (let key in mobile) {
          for (let i = 0; i < Object.keys(mobile[key]).length; i++) {
            if (`${key}` == "director") {
              this.director.push(mobile[key][i]);
            }
            if (`${key}` == "masters") {
              this.masters.push(mobile[key][i]);
            }
            if (`${key}` == "ms_alumni") {
              this.ms_alumni.push(mobile[key][i]);
            }
            if (`${key}` == "phd_alumni") {
              this.phd_alumni.push(mobile[key][i]);
            }
            if (`${key}` == "phds") {
              this.phds.push(mobile[key][i]);
            }
            if (`${key}` == "post_doc_alumni") {
              this.post_doc_alumni.push(mobile[key][i]);
            }
            if (`${key}` == "undergrad_alumni") {
              this.undergrad_alumni.push(mobile[key][i]);
            }
            if (`${key}` == "undergraduates") {
              this.undergraduates.push(mobile[key][i]);
            }
          }
        }
      })
    })
  }
}
