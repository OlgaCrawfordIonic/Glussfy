import { Injectable } from '@angular/core';
import {Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
value : string | null =''
  constructor() { }


async setName(){
  await Preferences.set({
    key: 'userStatus',
    value: 'pro',
  });
};

async checkName(){
  const { value } = await Preferences.get({ key: 'userStatus' });
  this.value=value; 
  console.log(`Hello ${value}!`);
 
};
async removeName (){
  await Preferences.remove({ key: 'userStatus' });
};
}
