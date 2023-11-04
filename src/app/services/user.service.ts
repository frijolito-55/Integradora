import {Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor (private auth: Auth) { }

    register({ email, password}: any){

        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login({email, password}:any){
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    logout() {
        return signOut(this.auth);
    }
    
}

