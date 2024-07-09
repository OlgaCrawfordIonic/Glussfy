
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonButton,IonButtons,IonTitle,IonIcon, IonBackButton,IonToolbar,NavController  } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { LinksService } from '../../linksService/links.service';
import { Link } from '../../linksService/link.model';
import { AudioService } from '../../audio.service';


@Component({
  selector: 'app-comparesounds',
  templateUrl: './comparesounds.page.html',
  styleUrls: ['./comparesounds.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonButtons,IonBackButton,IonIcon, CommonModule, CommonModule, RouterLink]
})
export class ComparesoundsPage implements OnInit {
  linkId!:string | null;
  linkSub!:Subscription;
  link!:Link;
  lesson!:boolean;
  num!:number;
  shortAlongA!:boolean;
  shortIlongI!:boolean;
  shortUlongU!:boolean;
  shortOlongO!:boolean;
  erSoundorSound!:boolean;
  thands!:boolean;
  thandf!:boolean;
  thandz!:boolean;
  iendee!:boolean;
  euor!:boolean;
  euo!:boolean;




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
         console.log('No linkId')
         return;
       }
     else{ this.linkId=paramMap.get('linkId');
       if (this.linkId==='/long-a-short-a')
       {this.shortAlongA=true;}
       else  if (this.linkId==='/longi-shorti')
       {this.shortIlongI=true;}
       else if (this.linkId==='/long-u-short-u')
       {this.shortUlongU=true;}
       else  if (this.linkId==='/long-o-short-o')
       {this.shortOlongO=true;}
       else if (this.linkId==='/er-or')
       {this.erSoundorSound=true;}
       else if (this.linkId==='/compare-thand-s')
       {this.thands=true;}
       else if (this.linkId==='/compare-thandf')
       {this.thandf=true;}
       else if (this.linkId==='/thandz')
       {this.thandz=true;}
       else if (this.linkId==='/iendee')
       {this.iendee=true;}
       else if (this.linkId==='/euor')
       {this.euor=true;}
       else if (this.linkId==='/euo')
       {this.euo=true;}
       
       
       
       
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
 
 }
 
