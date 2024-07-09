import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LinksService } from '../../linksService/links.service';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Link } from '../../linksService/link.model';

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
  constructor(private linksService: LinksService, private router:Router) { }

 showIndex(id:number, title:string){
  console.log(id, title)
 }
  navigate(num:number,link:string | undefined, id :string | undefined ){
   
    this.linksService.num=num;//Lesson N
    this.linksService.lesson=true;//to show Lesson N in the title
    this.router.navigate([link, id]);
   
  }

 proMode(){ this.linksService.unlockLessons()}
 


  ngOnInit() {
    this.linksService.unlockLessons()

   // this.links=this.linksService.links; to use with async pipe in html
    
  this.linksSub=this.linksService.links.subscribe((links) => {
    this.links=links;
    console.log(links)
        // Handle the links data here
     //   console.log(this.links);
        // Perform any other operations with the links data
      });
    
  }

  ngOnDestroy(): void {
    if(this.linksSub) {
      this.linksSub.unsubscribe();
    }
}

}

