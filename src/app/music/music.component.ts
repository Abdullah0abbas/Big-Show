import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
constructor(){}

@ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

@HostListener('window:beforeunload')
saveAudioPosition() {
  this.audioPlayer.nativeElement.pause();
  localStorage.setItem('audioPosition', String(this.audioPlayer.nativeElement.currentTime));
}

ngAfterViewInit() {
  this.audioPlayer.nativeElement.play();
}

ngOnInit() {
  const audioPosition = localStorage.getItem('audioPosition');
  if (audioPosition) {
    this.audioPlayer.nativeElement.currentTime = parseFloat(audioPosition);
    this.audioPlayer.nativeElement.play();
  }
}
}
