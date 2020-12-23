import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { YoutubeResponse } from 'src/app/projects/models/videos';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = environment.YOUTUBE_KEY;
  private playlist = 'UUznBt0cEH8gbn6iQL1gTHRw';
  private nextPageToken = '';

  constructor(private http: HttpClient) { }

  getVideos() {
      const url = `${this.youtubeUrl}/playlistItems`

      const params = new HttpParams()
        .set('part', 'snippet')
        .set('maxResults', '10')
        .set('playlistId', this.playlist)
        .set('key', this.apiKey)

      return this.http.get<YoutubeResponse>(url, { params } )
            .pipe(

              map(resp => {
                // this.nextPageToken = resp.nextPageToken;
               return resp.items;
              }),
              
              map(items => items.map(video => video.snippet))
            
            )
  }
}
