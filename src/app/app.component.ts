import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'media_player';
  playbtn: any = false;
  pausebtn:any = false

  mp3 = "../assets/test.mp3"
  volume: Number = 100
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  current_time: any = "0:00:00"
  duration: any = "0:00:00"
  total_duration: any = 0
  seek: any = 0
  audio = new Audio()
  streamObserver(mp3: any) {
    return new Observable(observer => {
      this.audio.src = mp3
      this.audio.play()

      const handler = (event: Event) => {
        console.log(event)
        this.seek = this.audio.currentTime
        this.total_duration = this.audio.duration
        this.duration = this.formatTime(this.audio.duration)
        this.current_time = this.formatTime(this.audio.currentTime)
      }
      // add event call or sene the event
      this.addevent(this.audio, this.audioEvents, handler)
    })
  }
  formatTime(time: number, format: string = "HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
  // addd event  functions
  addevent(obj: any, events: any, handler: any) {
    events.forEach((event: any) => {
      obj.addEventListener(event, handler)
    })

  }
  // remove event functions
  // removeEvent(obj: any, events: any, handler: any) {
  //   events.forEach((event: any) => {
  //     obj.removeEventListener(event, handler)
  //   })

  // }


  setVolume(e: any) {
    this.volume = (e.target.value * 100)
    this.audio.volume = e.target.value
  }

  @Output() parentFunction: EventEmitter<any> = new EventEmitter()

  play(event: any) {
    this.audio.play()

    this.streamObserver(event).subscribe(event => { })
  }


  pause() {
    this.playbtn = true
    this.audio.pause()
    // this.total_duration=this.audio.currentTime
    
    // this.audio.addEventListener("play",event=>{
    //   console.log(event)
    //   this.audio.play()
    // })
  }

  stop() {
    this.audio.pause()
    this.audio.currentTime = 0
  }
  seektoplay(e: any) {
    this.formatTime(this.audio.currentTime = e.target.value)

  }

  

}

