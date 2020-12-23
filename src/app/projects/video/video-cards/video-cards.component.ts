import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/projects/services/videos.service';
import { Video } from 'src/app/projects/models/videos';



@Component({
  selector: 'app-video-cards',
  templateUrl: './video-cards.component.html',
  styleUrls: ['./video-cards.component.scss']
})
export class VideoCardsComponent implements OnInit {

  videos: Video[] = [];

  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.videosService.getVideos()
      .subscribe(resp => {
        console.log(resp);
        this.videos.push(...resp);
      })
  }

}
