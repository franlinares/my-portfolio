export interface YoutubeResponse {
  kind:     string;
  etag:     string;
  items:    Item[];
  pageInfo: PageInfo;
}

export interface Item {
  kind:    ItemKind;
  etag:    string;
  id:      string;
  snippet: Video;
}

export enum ItemKind {
  YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Video {
  publishedAt:  Date;
  channelId:    ChannelID;
  title:        string;
  description:  string;
  thumbnails:   Thumbnails;
  channelTitle: ChannelTitle;
  playlistId:   PlaylistID;
  position:     number;
  resourceId:   ResourceID;
}

export enum ChannelID {
  UCznBt0CEH8Gbn6IQL1GTHRw = "UCznBt0cEH8gbn6iQL1gTHRw",
}

export enum ChannelTitle {
  FranciscoLinaresGorria = "Francisco Linares Gorria",
}

export enum PlaylistID {
  UUznBt0CEH8Gbn6IQL1GTHRw = "UUznBt0cEH8gbn6iQL1gTHRw",
}

export interface ResourceID {
  kind:    ResourceIDKind;
  videoId: string;
}

export enum ResourceIDKind {
  YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
  default:  Default;
  medium:   Default;
  high:     Default;
  standard: Default;
  maxres:   Default;
}

export interface Default {
  url:    string;
  width:  number;
  height: number;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}
