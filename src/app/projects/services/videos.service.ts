import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = '';
  private playlist = '';
  private nextPageToken = '';

  constructor(private http: HttpClient) { }
}
