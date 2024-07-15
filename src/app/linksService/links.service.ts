import { Injectable, OnInit } from '@angular/core';
import { Link } from './link.model';

import { BehaviorSubject, take,map,tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LinksService implements OnInit {
  private _links = new BehaviorSubject<Link[]>([]);
  lesson!:boolean;
  num!:number;
  pro:boolean=false;
  
  constructor() {
    this.initializeLinks();
  
  }

 private initializeLinks() {
    const links: Link[]  = [
      new Link(
        0,
        "/ ɑː/ vowel",
        "/vowels",
        "/long-a",
        true,
        ["lesson"],
        false,
        "unsubscribed"
      ),
      new Link(
        0,
        "/ ʌ / vowel",
        "/vowels",
        "/short-a",
        true,
        ["lesson"],
        false,
        "unsubscribed"
      ),
      new Link(
        0,
        "Compare /ɑː/ and / ʌ /",
        "/comparesounds",
        "/long-a-short-a",
        true,
        ["lesson", "comparesounds"],
        true,
        "unsubscribed"
      ),
      new Link(
        0,
        "Tongue twisters with / ɑː/ and  /ʌ /",
        "/tonguetwisters",
        "/longa-shorta",
        true,
        ["lesson", "tonguetwisters"],
        false,
        "unsubscribed"
      ),
      new Link(
        0,
        "Poems  / ɑː/ and  /ʌ /",
        "/poems",
        "/long-a-short-a-poems",
        true,
        ["lesson", "poems"],
        false,
        "unsubscribed"
      ),
      new Link(
        0,
        "/i:/ vowel",
        "/vowels",
        "/longi",
        true,
        ["lesson"],
        false,
        "unsubscribed"
      ),
      new Link(
        0,
        "/ ɪ / vowel",
        "/vowels",
        "/shorti",
        true,
        ["lesson"],
        true,
        "unsubscribed"
      ),
      new Link(
        0,
        "Compare /i:/ and /ɪ/",
        "/comparesounds",
        "/longi-shorti",
        true,
        ["lesson","comparesounds"],
        false,
        "unsubscribed"
      ),
      new Link(
        0,
        "Tongue twisters with /i:/ and / ɪ /",
        "/tonguetwisters",
        "/longi-shorti-twisters",
        true,
        ["lesson", "tonguetwisters"],
        false,
        "unsubscribed"
      ),
      
      new Link(
        0,
        "Poems  /i:/ and / ɪ /",
        "/poems",
        "/longi-shorti-poems",
        true,
        ["lesson", "poems"],
        false,
        "unsubscribed"
      ),
new Link(
  0,
  "/u:/ vowel",
  "/vowels",
  "/long-u",
  true,
  ["lesson"],
  true,
  "unsubscribed"
),
new Link(
  0,
  "/ʊ/ vowel",
  "/vowels",
  "/short-u",
  true,
  ["lesson"],
  true,
  "unsubscribed"
),
new Link(
  0,
  "Compare /u:/ and /ʊ/",
  "/comparesounds",
  "/long-u-short-u",
  true,
  ["lesson","comparesounds"],
  true,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with /u:/ and /ʊ/",
  "/tonguetwisters",
  "/longu-shortu-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "Poems  /u:/ and /ʊ/",
  "/poems",
  "/long-u-short-u-poems",
  true,
  ["lesson", "poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ɔ:/ vowel",
  "/vowels",
  "/long-o",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ɒ/ vowel",
  "/vowels",
  "/short-o",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Compare /ɔ:/ and /ɒ/",
  "/comparesounds",
  "/long-o-short-o",
  true,
  ["lesson","comparesounds"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with /ɔ:/ and /ɒ/",
  "/tonguetwisters",
  "/longo-shorto-twisters",
  true,
  ["lesson" , "tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Poems  /ɔ:/ and /ɒ/",
  "/poems",
  "/long-o-short-o-poems",
  true,
  ["lesson", "poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/3:/ vowel",
  "/vowels",
  "/er-sound",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Compare /ɔ:/ and /3:/",
  "/comparesounds",
  "/er-or",
  true,
  ["lesson","comparesounds"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "Poems /ɔ:/ and /3:/",
  "/poems",
  "/er-or-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ ə / vowel",
  "/vowels",
  "/e-sound",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "/ e / vowel",
  "/vowels",
  "/normale",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Poems / ə / and / e /",
  "/poems",
  "/e-normal-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ æ / vowel",
  "/vowels",
  "/opene",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Poems / ə / , / e /and / æ / ",
  "/poems",
  "/e-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ p / consonant",
  "/consonants",
  "/p-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / p /",
  "/tonguetwisters",
  "/p-twisters",
  true,
  ["lesson", "tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ b / consonant",
  "/consonants",
  "/b-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / b /",
  "/tonguetwisters",
  "/b-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Poems / p / , / b /",
  "/poems",
  "/pb-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ s / consonant",
  "/consonants",
  "/s-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / s /",
  "/tonguetwisters", 
 "/s-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ z / consonant",
  "/consonants",
  "/z-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / z /",
  "/tonguetwisters",
  "/z-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Poems / s / , / z /",
  "/poems",
  "/sz-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ f / consonant",
  "/consonants",
  "/f-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / f /",
  "/tonguetwisters",
  "/f-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ v / consonant",
  "/consonants",
  "/v-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / v /",
  "/tonguetwisters",
  "/v-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Poems / f / , / v /",
  "/poems",
  "/fv-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "/ k / consonant",
  "/consonants",
  "/k-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / k /",
  "/tonguetwisters",
  "/k-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ g / consonant",
  "/consonants",
  "/g-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / g /",
  "/tonguetwisters",
  "/g-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Poems / k / , / g /",
  "/poems",
  "/kg-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ t / consonant",
  "/consonants",
  "/t-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / t /",
  "/tonguetwisters",
  "/t-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ d / consonant",
  "/consonants",
  "/d-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / d /",
  "/tonguetwisters",
  "/d-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Poems / t / , / d /",
  "/poems",
  "/td-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),


new Link(
  0,
  "/ h / consonant",
  "/consonants",
  "/h-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / h /",
  "/tonguetwisters",
  "/h-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "/ r / consonant",
  "/consonants",
  "/r-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "Tongue twisters with / r /",
  "/tonguetwisters",
  "/r-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
   0,
  "/ l / consonant",
  "/consonants",
  "/l-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / l /",
  "/tonguetwisters",
  "/l-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Poems / r / , / l /",
  "/poems",
  "/rl-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ θ / consonant",
  "/consonants",
  "/three-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / θ /",
  "/tonguetwisters",
  "/thUnvoiced-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ ð / consonant",
  "/consonants",
  "/th-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / ð /",
  "/tonguetwisters",
  "/thvoiced-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Compare / θ / and  / s /",
  "/comparesounds",
  "/compare-thand-s",
  true,
  ["lesson","comparesounds"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Compare / θ / and  / f /",
  "/comparesounds",
  "/compare-thandf",
  true,
  ["lesson","comparesounds"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Compare / ð / and / z /",
  "/comparesounds",
  "/thandz",
  true,
  ["lesson","comparesounds"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Poems / ð / , / θ /",
  "/poems",
  "/th-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ n / consonant",
  "/consonants",
  "/n-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / n /",
  "/tonguetwisters",
  "/n-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ m / consonant",
  "/consonants",
  "/m-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / m /",
  "/tonguetwisters",
  "/m-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ ŋ / consonant",
  "/consonants",
  "/ng-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / ŋ /",
  "/tonguetwisters",
  "/ng-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "Poems / n/, / m/, / ŋ /",
  "/poems",
  "/nm-poems",
  true,
  ["lesson","poems"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ ʃ / consonant",
  "/consonants",
  "/sh-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / ʃ /",
  "/tonguetwisters",
  "/sh-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ ʒ / consonant",
  "/consonants",
  "/mirage-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with / ʒ /",
  "/tonguetwisters",
  "/mirage-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ tʃ / consonant",
  "/consonants",
  "/ch-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "Tongue twisters with / tʃ / ",
  "/tonguetwisters",
  "/ch-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "/ w / consonant",
  "/consonants",
  "/w-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "Tongue twisters with / w /",
  "/tonguetwisters",
  "/w-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ dʒ / consonant",
  "/consonants",
  "/dg-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "/ j / consonant",
  "/consonants",
  "/j-consonant",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "diphthong / ɪə/ ",
  "/diphtongs",
  "/beer",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "diphthong / eə /",
  "/diphtongs",
  "/hair",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Compare / ɪə / and / eə /",
  "/comparesounds",
  "/iendee",
  true,
  ["lesson","comparesounds"],
  false,
  "unsubscribed"
),

new Link(
  0,
  "Tongue twisters with / ɪə / and / eə /",
  "/tonguetwisters",
  "/ieee-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
  ),
  
new Link(
  0,
  "diphthong  / ʊə /",
  "/diphtongs",
  "/poor",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "diphthong / əʊ /",
  "/diphtongs",
  "/snow",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  " Compare /əʊ/ and /ɔ:/",
  "/comparesounds",
  "/euor",
  true,
  ["lesson","comparesounds"],
  false,
  "unsubscribed"
),
new Link(
  0,
  " Compare /əʊ/ and /ɒ/",
  "/comparesounds",
  "/euo",
  true,
  ["lesson","comparesounds"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with /ʊə/ and / əʊ /",
  "/tonguetwisters",
  "/euue-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
  ),
new Link(
  0,
  "diphthong /aʊ/",
  "/diphtongs",
  "/owl",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  " diphthong /aɪ/",
  "/diphtongs",
  "/hi",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with /aʊ/ and / aɪ /",
  "/tonguetwisters",
  "/auai-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
  ),
new Link(
  0,
  "diphtong / ɔɪ /",
  "/diphtongs",
  "/boy",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "diphthong /eɪ/",
  "/diphtongs",
  "/paper",
  true,
  ["lesson"],
  false,
  "unsubscribed"
),
new Link(
  0,
  "Tongue twisters with /ɒɪ/ and / eɪ /",
  "/tonguetwisters",
  "/eioi-twisters",
  true,
  ["lesson","tonguetwisters"],
  false,
  "unsubscribed"
  ),


/*new Link(
  0,
  "Tongue twisters with / j /",
  "/tonguetwisters",
  "/j-twisters",
  true,
  ["lesson"],
  false,
  "unsubscribed"
)*/
];

this._links.next(links.map((link, index) => {
  link.id = index;
  return link;
}));
}


get links() {
  return this._links.asObservable();
}


getLink(id:string |null){
  return this.links.pipe(
    take(1),
    map(links =>{
        return {...links.find(l =>l.linkId===id, //id as inpage id
         // console.log(links)
         )};
    })
  )
}

unlockLesson()
{
  console.log('clicked')
 return this.links.pipe(
  take(1),
  tap(links =>{
    console.log(links)
    const UpdatedLinkIndex=links.findIndex(link => link.id===2);
    const UpdatedLinks=[...links];
    console.log(UpdatedLinks);
    const oldLink=UpdatedLinks[UpdatedLinkIndex];
    UpdatedLinks[UpdatedLinkIndex]=new Link(oldLink.id,oldLink.title, oldLink.link,
      oldLink.linkId,oldLink.lesson,oldLink.typeOfPage,true,oldLink.typeOfSubscription);
      console.log(UpdatedLinks);
      this._links.next(UpdatedLinks);
    
  }
  

  )//tap

 ).subscribe();//pipe
 
}




unlockLessons() {
  console.log('clicked');
  return this.links.pipe(
    take(1),
    tap(links => {
      console.log(links);
      const UpdatedLinks = links.map(link => {
        return new Link(link.id, link.title, link.link, link.linkId, link.lesson, link.typeOfPage, false, link.typeOfSubscription);

       /* if (this.pro) {
          return new Link(link.id, link.title, link.link, link.linkId, link.lesson, link.typeOfPage, false, link.typeOfSubscription);
        } else {
          console.log(link)
          return link;
        }*/
      });
      console.log(UpdatedLinks);
      this._links.next(UpdatedLinks);
    })
  ).subscribe();;
}
ngOnInit(): void {
 // this.subscribeToProStatus();
  //this.unlockLessons();
}

}


