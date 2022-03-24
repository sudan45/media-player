import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {


  music: any = [{
    "name": "Ashes By Steller",
    "music": "../assets/Ashes.mp3"
  },
  {
    "name": "Heer Ranja By Bhuvan Bam",
    "music": "../assets/heer_ranja.mp3"
  },
  {
    "name": "Namo Namo By Amit Trivedi",
    "music": "../assets/test.mp3"
  },
]




  constructor() { }

  ngOnInit(): void {
  }

}
