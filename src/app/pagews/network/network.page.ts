import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton ,IonBackButton, IonButtons,} from '@ionic/angular/standalone';
import { Network, ConnectionStatus } from '@capacitor/network';
import { compileClassDebugInfo } from '@angular/compiler';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton ,IonBackButton, IonButtons]
})
export class NetworkPage implements OnInit, OnDestroy {

  private networkListener: any; // Define a variable to hold the listener


  constructor() { }

  async getStatus(){
    const status = await Network.getStatus();

  console.log('Network status:', status);
  }

  ngOnInit() {
   // this.registerNetworkListener();
  }

  ngOnDestroy() {
  //  this.unregisterNetworkListener();
  }

  /*registerNetworkListener() {
    this.networkListener = Network.addListener('networkStatusChange', (status: ConnectionStatus) => {
      console.log('Network status changed', status);
      // You can add more logic here to respond to network status changes
    });
  }

  unregisterNetworkListener() {
    if (this.networkListener) {
      this.networkListener.removeAllListeners(); // Remove the listener when the component is destroyed
    }
  }*/  
 //something wroimg with these functions while compiling

}
