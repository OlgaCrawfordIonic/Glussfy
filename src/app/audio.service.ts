import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {


  audio: HTMLAudioElement; 
  audioFilePath: string = ''; // Variable to hold the dynamic audio file path
  isPlaying: boolean = true;
 

  constructor() { this.audio = new Audio() }

  Play(audiopath:string) 
  { let audio = new Audio(audiopath);
    audio.play()}

    toggleIcon(audiopath:string) {
      //In the toggleIcon() method, before performing any action, we check if audioFilePath is set. If it's empty or null, we simply return and do nothing. Otherwise, if audioFilePath is valid, we either pause or play the audio based on the current state (isPlaying). If the audio is paused, we set the src property of the Audio() object to the updated audioFilePath, and then call the play() method to start the audio playback.
  
  this.audioFilePath=audiopath;
  if (!this.audioFilePath) {
    console.log('no path')
    return; // No audio file path set, do nothing
  }
  
  if (this.isPlaying) {
    console.log(audiopath)
  this.audio.src = this.audioFilePath; // Set the dynamic audio file path
  
  this.audio.play()
  } else {
    
    this.audio.pause();
   
  }
  
  this.isPlaying = !this.isPlaying;
  
  }
}

