import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LinksService } from './linksService/links.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user = new BehaviorSubject<{ pro: boolean }>({ pro: false });


  constructor( private linksServive:LinksService) { }

  get user(){
    return this._user.asObservable();
   }

   updateUserProStatus(isPro: boolean) {
    const user = this._user.getValue();
    user.pro = isPro;
    this._user.next(user);
    console.log(this.user,this._user, user )
    if (user.pro===true)
   {console.log('user is pro from user.service')
    this.linksServive.unlockLessons();}
    else {console.log(user.pro  + 'userPro is false, cant unlock lessons')}
  }

}
