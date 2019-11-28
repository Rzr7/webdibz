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
    public db: AngularFirestore, // Database
    public afAuth: AngularFireAuth // Authorization
  ) {

    /**
     * Listen for changes inside templates database collection
     * 
     * @TODO - Only load DB once, when needed and save it locally to save traffic
     * edit: i tried, i couldnt
     */
    this.items = db.collection('templates').valueChanges();
    this.items.subscribe(e => {
        console.log(e); // Outputs '/templates' documents
    });

   }

  /**
   * If user is signed in, logout
   * Otherwise, log in using Google Auth
   */
  handleAuth() {
     !this.afAuth.auth.currentUser ?
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()) :
    this.afAuth.auth.signOut();
  }

}
