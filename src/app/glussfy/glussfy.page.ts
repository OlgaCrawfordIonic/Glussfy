import { Component, OnInit } from '@angular/core';
import { AsyncPipe,CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonBackButton, IonButtons, IonButton, IonList, IonItemDivider,IonLabel, IonItem} from '@ionic/angular/standalone';
import { ProductService } from '../product.service';
import { GlassfySku } from 'capacitor-plugin-glassfy';

@Component({
  selector: 'app-glussfy',
  templateUrl: './glussfy.page.html',
  styleUrls: ['./glussfy.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton, IonButtons, AsyncPipe, IonButton, IonList, IonItemDivider,IonLabel, IonItem]
})
export class GlussfyPage implements OnInit {
  offerings = this.productService.offerings;


  constructor(private productService:ProductService) { }
  async purchase(sku: GlassfySku) {
    console.log(sku)
		await this.productService.purchase(sku);
    
	}

	async restore() {
		await this.productService.restore();
	}
  ngOnInit() {
    console.log("All set! Let's go!");
    console.log(this.offerings);
  }

}
