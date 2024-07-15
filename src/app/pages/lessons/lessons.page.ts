import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LinksService } from '../../linksService/links.service';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Link } from '../../linksService/link.model';
import { ProductService } from '../../product.service'; // Import ProductService
import { ModalController } from '@ionic/angular';
import { SubscribeModalComponent } from '../../subscribe-modal/subscribe-modal.component'; // Ensure this component is created and properly set up
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, AsyncPipe]

})
export class LessonsPage implements OnInit, OnDestroy {
  links!:Link[]
  lesson!:boolean
  linksSub!:Subscription
  userSub!:Subscription
  pro:boolean=false;

  constructor(private linksService: LinksService, private router:Router, private productService:ProductService,private modalCtrl: ModalController, private userService:UserService) { }
  message = 'This modal example uses the modalController to present and dismiss modals.';

 showIndex(id:number, title:string){
  console.log(id, title)
 }

 async openModal() {
  const modal = await this.modalCtrl.create({
    component: SubscribeModalComponent,
  });
  modal.present();

  const { role } = await modal.onWillDismiss();

  if (role === 'subscribe') {
    this.router.navigate(['/glussfy']); // Replace with actual subscription page route
  }
}
  navigate(num:number,link:string | undefined, id :string | undefined, locked: boolean | undefined ){
   if(locked ===false || this.pro===true)//check if the lesson is locked 
     
    {this.linksService.num=num;//Lesson N
    this.linksService.lesson=true;//to show Lesson N in the title
    this.router.navigate([link, id]);}
  else {
    this.openModal();
  //     openModal();- will ask if the user wants to subsctibe to our app and have an additional benefirs of learning English  should have cancel and subscribe options. If user presses cancel the modal closes, if the user presses subscribe , it takes the user to glussfy page and the modal closes
       }
}

 proMode(){ this.pro=!this.pro}
 


  ngOnInit() {
 //   this.linksService.unlockLessons()
     
   // this.links=this.linksService.links; to use with async pipe in html
    
  this.linksSub=this.linksService.links.subscribe((links) => {
    this.links=links;
    console.log(links)
        // Handle the links data here
     //   console.log(this.links);
        // Perform any other operations with the links data
      });

     this.userSub=this.userService.user.subscribe(user => {
       this.pro = user.pro;
        
       console.log('Pro status updated1: from lessons page', this.pro);
     })
    
  }

  ngOnDestroy(): void {
    if(this.linksSub) {
      this.linksSub.unsubscribe();
    }
    if(this.userSub){
      this.userSub.unsubscribe();
    }
}

}

