import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

items: Observable<any[]>;

  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.items = db.collection('templates').valueChanges();
    this.items.subscribe(e => {
        console.log(e);
    });
   }

  login() {
     !this.afAuth.auth.currentUser ?
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()) :
    this.afAuth.auth.signOut();
  }

}
