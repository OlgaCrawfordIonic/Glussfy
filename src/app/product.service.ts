import { Injectable } from '@angular/core';
import { Glassfy,
  GlassfyOffering,
	GlassfyPermission,
	GlassfySku,
	GlassfyTransaction } from "capacitor-plugin-glassfy";
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  user=new BehaviorSubject({pro:false});
  private _offerings = new  BehaviorSubject<GlassfyOffering[]>([]);
  

  async initGlassfy()
  {
    try {
              
      await Glassfy.initialize({
        apiKey:environment.glassfyKey,
        watcherMode: false});
        // Get all offerings (products)
        const offerings = await Glassfy.offerings();
        console.log(offerings)
        this._offerings.next(offerings.all);
        console.log('No error from initialize function' )
  
       
      } catch (e) {
      // initialization error
      console.log('init error: ', e);
  
  }
  }
  constructor(private alertController:AlertController) {this.initGlassfy(); }
  get offerings(){
    return this._offerings.asObservable();
  }

  async purchase(sku: GlassfySku) {
    try{
   const transaction=await Glassfy.purchaseSku({sku});
   //loading indicator
   if(transaction.receiptValidated)// if purchase successful
   {
    this.handleSuccessfulTransactionResult(transaction,sku);
   }
    }
    catch(e){
      console.log.apply('There is a error in purchasing' + e);
      const alert = await this.alertController.create({
        header: 'Purchase failed',
        message: 'error in subscribing',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  }

  async restore() {
    const permissions = await Glassfy.restorePurchases();
    console.log(permissions);
    this.handleExistingPermissions(permissions.all);
  }
  handleExistingPermissions(permissions: GlassfyPermission[]) {
    console.log(permissions);
    for (const perm of permissions) {
      if (perm.isValid) {
        if (perm.permissionId === 'glassfy_premium_monthly_1.99' || 'glassfy_premium_3months_4.99'  || 'glassfy_premium_6months_8.99') {
          const user = this.user.getValue();
          user.pro=true;
          this.user.next(user);
          console.log(this.user, user)
    // making the user pro now can install the logic of unlocking lessons
  }
  }
  }
  }



  handleSuccessfulTransactionResult(transaction:GlassfyTransaction,sku:GlassfySku){
    console.log('from haddlestr' + transaction,sku)
    const user = this.user.getValue();
          user.pro=true;
          this.user.next(user);
          console.log(this.user, user)
    
  }

 
}
