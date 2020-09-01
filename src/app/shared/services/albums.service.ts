import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  apiUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
  albumsStorage: any;

  constructor(private httpClient: HttpClient) {
  }

  public getAlbums(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  public getAlbumById(id): Observable<any> {
    return this.albumsStorage.entry[id];
  }


}
