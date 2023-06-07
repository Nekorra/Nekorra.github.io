import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { first, map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  list: any; 

  constructor(
    private db: AngularFireDatabase,
  ) { } 

  getData(path: string) {
    return this.db.object(path).valueChanges().pipe(take(1)).toPromise();
  }

  async addAwardData(path: string, data: any) {
    const ref = this.db.object(path);
    return ref.set(data)
  }

  async addJournalData(path: string, data: any) {
    const ref = this.db.object(path);
    return ref.set(data);
  }

  async addPublicationData(path: string, data:any) {
    const ref = this.db.object(path);
    return ref.set(data);
  }

  remove(path: string, data: any) {
    const ref = this.db.object(path);
    return ref.set(data);
  }
  
  async addResearchData(path: string, data: any) {
    const ref = this.db.object(path);
    return ref.set(data)
  }


}
