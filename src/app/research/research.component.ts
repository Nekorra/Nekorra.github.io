import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  researchData: any;
  researchIntro: any;
  readMoreList: any[] = [];
  searchResearch: any;

  constructor(
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {
    this.getData();
  }
  
  async getData() {
    
    await this.databaseService.getData("research/research").then((res: any) => {
      this.researchData = res;
      console.log(this.researchData);
    })

    for (let i = 0; i < this.researchData.length; i++) {
      this.readMoreList.push(false);
      if (this.researchData[i].title == "ASEEC") {
        this.researchIntro = this.researchData[i];
        this.researchData.splice(i, 1);
      }
    }
  }

  readMore(ind: number) {
    this.readMoreList[ind] = true;
  }

  readLess(ind: number) {
    this.readMoreList[ind] = false;
  }

}
