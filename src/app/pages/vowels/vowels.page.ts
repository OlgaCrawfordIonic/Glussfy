import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonButton,IonButtons,IonTitle,IonIcon, IonBackButton,IonToolbar,NavController  } from '@ionic/angular/standalone';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { LinksService } from '../../linksService/links.service';
import { Link } from '../../linksService/link.model';
import { AudioService } from '../../audio.service';


@Component({
  selector: 'app-vowels',
  templateUrl: './vowels.page.html',
  styleUrls: ['./vowels.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle,
    IonToolbar,IonButton,IonButtons,
    IonBackButton,IonIcon, CommonModule,
    IonIcon,CommonModule,RouterLink]
})
export class VowelsPage implements OnInit, OnDestroy{

  /* short_a!:string;
  long_a!:string ;
  short_o!:string;
  long_o!:string;*/
  linkId!:string | null;
  linkSub!:Subscription;
  link!:Link;
  shortA!:boolean;
  longA!:boolean;
  shortI!:boolean;
  longI!:boolean;
  shortU!:boolean;
  longU!:boolean;
  shortO!:boolean;
  longO!:boolean;
  ersound!:boolean;
  esound!:boolean;
  normale!:boolean;
  opene!:boolean;


  lesson!:boolean;
  num!:number;

  constructor(private route:ActivatedRoute, private navCtrl: NavController,
   private linksS:LinksService, private audio:AudioService) { }

 Play(audiopath:string){
   this.audio.Play(audiopath);
 }

  ngOnInit() {
   this.num=this.linksS.num;
    this.lesson=this.linksS.lesson;
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('linkId')) {
        this.navCtrl.navigateBack('home');
        return;
      }
    else{ this.linkId=paramMap.get('linkId');
      if (this.linkId==='/short-a')
      {this.shortA=true;}
      else  if (this.linkId==='/long-a')
      {this.longA=true;}
      if (this.linkId==='/shorti')
      {this.shortI=true;}
      else  if (this.linkId==='/longi')
      {this.longI=true;}
      if (this.linkId==='/short-u')
      {this.shortU=true;}
      else  if (this.linkId==='/long-u')
      {this.longU=true;}
      if (this.linkId==='/short-o')
      {this.shortO=true;}
      else  if (this.linkId==='/long-o')
      {this.longO=true;}
      else  if (this.linkId==='/er-sound')
      {this.ersound=true;}
      else  if (this.linkId==='/e-sound')
      {this.esound=true;}
      else  if (this.linkId==='/normale')
      {this.normale=true;}
      else  if (this.linkId==='/opene')
      {this.opene=true;}
     
     
    } 
   this.linkSub=this.linksS.getLink(this.linkId).subscribe(links => {this.link=links;
   // console.log(this.link)
  },
    )
  })

}
ngOnDestroy(){
  this.linkSub.unsubscribe();
}
ionViewWillLeave(){
  this.linksS.lesson=false;
}

}

