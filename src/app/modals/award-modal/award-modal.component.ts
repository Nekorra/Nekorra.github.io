import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-award-modal',
  templateUrl: './award-modal.component.html',
  styleUrls: ['./award-modal.component.css']
})
export class AwardModalComponent implements OnInit {

  name: string = "";
  link: string = "";
  timespan: string = "";
  earnings: string = "";
  description: string = "";
  length: number;
  type: string;
  index: number;
  awardsData: any;
  image = null;
  
  constructor(
    private databaseService: DatabaseService,
    private storage: AngularFireStorage,
    @Inject(MAT_DIALOG_DATA) public data: any
    )
   { }

  ngOnInit(): void {
    if (this.data.type == 'add') {
      this.awardsData = this.data.data;
      console.log(this.awardsData);
      this.length = this.data.length;
      this.type = this.data.type;
    }
    if (this.data.type == 'edit') {
      this.awardsData = this.data.data;
      this.type = this.data.type
      this.index = this.data.index;
      this.name = this.data.data[this.index].name;
      this.link = this.data.data[this.index].link;
      this.timespan = this.data.data[this.index].timespan;
      this.earnings = this.data.data[this.index].earnings;
      this.description = this.data.data[this.index].description;
      this.image = this.data.data[this.index].img_name;

    }
  }


  async addAward() {
    if (this.type == 'add') {
      this.awardsData.splice(0, 0, {name: this.name, link: this.link, timespan: this.timespan, earnings: this.earnings, description: this.description, img_name: this.image})
      await this.databaseService.addAwardData(`honors/awards/`, this.awardsData);
      alert("Successfully added Data");
    }
    if (this.type == 'edit') {
      this.awardsData[this.index] = {name: this.name, link: this.link, timespan: this.timespan, earnings: this.earnings, description: this.description, img_name: this.image}
      await this.databaseService.addAwardData(`honors/awards/`, this.awardsData);
      alert("Successfully edited Data");
    }
    
  }

  async onFileChange(event: any) {
    const file = event.target.files[0]
    if (file) {
      const path = `awards/${file.name}`
      const uploadTask = await this.storage.upload(path, file);
      this.image = await uploadTask.ref.getDownloadURL();
      console.log(this.image);
    }
  }

  async removeImage() {
    console.log('Removing image')
    this.storage.refFromURL(this.image).delete();
    this.image = null;
    this.awardsData[this.index] = {name: this.name, link: this.link, timespan: this.timespan, earnings: this.earnings, description: this.description, img_name: this.image}
    await this.databaseService.addAwardData(`honors/awards/`, this.awardsData);

  }

}
