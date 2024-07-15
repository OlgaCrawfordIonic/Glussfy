import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {IonContent, IonButton, IonTitle,IonToolbar, IonHeader }from '@ionic/angular/standalone';
@Component({
  selector: 'app-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.scss'],
  standalone: true,
  imports: [IonContent, IonButton,IonTitle,IonToolbar,CommonModule, IonHeader]
})
export class SubscribeModalComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  subscribe() {
    this.modalCtrl.dismiss(null, 'subscribe');
  }

  ngOnInit() {}

}
