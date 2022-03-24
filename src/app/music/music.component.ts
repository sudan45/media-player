import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {


  music: any = [{
    "name": "Ashes By Steller",
    "music_mp3": "../assets/Ashes.mp3"
  },
  {
    "name": "Heer Ranja By Bhuvan Bam",
    "music_mp3": "../assets/heer_ranja.mp3"
  },
  {
    "name": "Namo Namo By Amit Trivedi",
    "music_mp3": "../assets/test.mp3"
  },
]

@Output() Songs=new EventEmitter<any>();

play_songs(value:any){
  console.log(value);
  
  this.Songs.emit(value)
}


  constructor() { }

  ngOnInit(): void {
  }

}
