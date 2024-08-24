import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ProductService } from './product.service'; // Import ProductService
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Glassfy} from "capacitor-plugin-glassfy";
import { StorageService } from './storage.service';
import {Preferences} from '@capacitor/preferences';





// consult this link https://chatgpt.com/share/9b4d3c80-4014-44d3-a2ee-a36043568d56
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CommonModule],
})
export class AppComponent implements OnInit{
  checkingStatus: boolean = false;  // Added state for checking status
 error:boolean=false;
 async initGlassfy()
  { //get user status
    const { value } = await Preferences.get({ key: 'userStatus' });
     console.log(`Hello ${value}!`);
     if (value==='pro')
       {console.log("Storage rerurned pro from app.compon11");
        this.userService.updateUserProStatus(true)
       }
    else {
 
       // { this.userService.updateUserProStatus(true) }
      //else {checkWififunction if (wifi===true) { Glussfy logic}
      //else {}
        try {
          
          await this.productService.initGlassfy();
          const permissions = await Glassfy.permissions();
          console.log('after await  permissions');
       for (const perm of permissions.all) {
      if (perm.isValid) {
        if (perm.permissionId === 'glassfy_premium_monthly_1.99' || 'glassfy_premium_3months_4.99'  || 'glassfy_premium_6months_8.99') {
         {this.userService.updateUserProStatus(true)}
         (console.log('pro status prom app component after updateuserprooooo'))
          
    // making the user pro now can install the logic of unlocking lessons
  }
              }
          };
     
      }
      
    catch (e) {
      // initialization error
      console.log('init error: ', e);
  }


}//fromelse
  }
  
  constructor(
    private productService: ProductService, private userService:UserService, private storageService:StorageService
   
  ) {this.initGlassfy()}




    ngOnInit() {
      console.log('ngOnInit called'); // Debug log
    }
}
