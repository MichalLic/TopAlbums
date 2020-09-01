import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AlbumsService} from '../../../shared/services/albums.service';


@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  albumsDetails: any = [];

  constructor(private albumService: AlbumsService, private router: Router) {
  }

  ngOnInit() {
    this.albumService.getAlbums().subscribe((resp: any) => {
      console.log(resp.feed);
      this.albumsDetails = resp.feed;
      this.albumService.albumsStorage = resp.feed;
    });
  }

  onShowDetails(index): void {
    this.router.navigate(['app/albums/details/' + index]);
  }

}
