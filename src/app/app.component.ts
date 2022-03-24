import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'media_player';
  mp3 = "../assets/test.mp3"
  volume: number = 0
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
      this.audio.src = this.mp3
      this.audio.play()

      const handler = (event: Event) => {
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
    console.log(time)
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
  // removeevent(obj: any, events: any, handler: any) {
  //   events.forEach((event: any) => {
  //     obj.removeEventListener(event, handler)
  //   })

  // }


  setVolume(e: any) {
    console.log(e.target.value);
    this.volume = (e.target.value * 100)

    this.audio.volume = e.target.value
  }

  play() {
    this.streamObserver(this.mp3).subscribe(event => { })
  }

  pause() {
    this.audio.pause()
  }

  stop() {
    this.audio.pause()
    this.audio.currentTime = 0
  }
  seektoplay(e: any) {
    this.formatTime(this.audio.currentTime = e.target.value)

  }


}

