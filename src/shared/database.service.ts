import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

items: Observable<any[]>

  constructor(
    private db: AngularFirestore
    ) { 
      this.items = db.collection('templates').valueChanges();
      this.items.subscribe(e=>{
        console.log(e)
      })
   }
}
