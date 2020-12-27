import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/projects/services/videos.service';
import { Video } from 'src/app/projects/models/videos';
import Swal from 'sweetalert2'



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

  showVideo(video: Video) {
    Swal.fire({
      title: `${video.title}`,
      width:'850px',
      padding:'2.5rem',
      background: '#F8F8F8',
      position: 'center',
      // grow:'fullscreen',
      showClass: {
        popup: 'swal2-show',
        backdrop:'swal2-backdrop-show',
      },
      showCloseButton: true,
      closeButtonHtml: '<i class="fas fa-times"></i>',
      showConfirmButton:false,
      html: 
             `<iframe width="100%" 
                     height="515" src="https://www.youtube.com/embed/${video.resourceId.videoId}" 
                     frameborder="0" 
                     allow="accelerometer; 
                     autoplay; 
                     clipboard-write; 
                     encrypted-media; 
                     gyroscope; 
                     picture-in-picture" 
                     allowfullscreen>
              </iframe>`,
     customClass: {
       container:'swal2-container'
     }
       
    })
   
    
  }  

}
