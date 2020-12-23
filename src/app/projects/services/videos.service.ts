import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = environment.YOUTUBE_KEY;
  private playlist = '';
  private nextPageToken = '';

  constructor(private http: HttpClient) { }
}
