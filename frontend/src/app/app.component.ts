import { Component } from '@angular/core';
import { TwitterserviceService } from './twitterservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTimeline : any;

  constructor(private api: TwitterserviceService){}

  ngOnInit(): void{
    this.api.getTimeline().subscribe(data => {
      this.myTimeline = data;
      console.log(data);
    })
  }
}
