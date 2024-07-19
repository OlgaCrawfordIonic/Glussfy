import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton ,IonBackButton, IonButtons,} from '@ionic/angular/standalone';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons,CommonModule, FormsModule,IonButton]
})
export class StoragePage implements OnInit {

  constructor(private storageService:StorageService) { }
  setName() {
    this.storageService.setName(); 
  }
  getName() {
    this.storageService.checkName();
    
  }
  removeName() {
    this.storageService.removeName();
  }

  ngOnInit() {
 
  }

}
