import { Injectable } from '@angular/core';
import {Preferences} from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


async setName(){
  await Preferences.set({
    key: 'name',
    value: 'Max',
  });
};

async checkName(){
  const { value } = await Preferences.get({ key: 'name' });

  console.log(`Hello ${value}!`);
};
async removeName (){
  await Preferences.remove({ key: 'name' });
};
}
