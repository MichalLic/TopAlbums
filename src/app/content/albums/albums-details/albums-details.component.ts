import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Subscription} from 'rxjs';
import {AlbumsService} from '../../../shared/services/albums.service';
import {CustomAnimation} from '../../../shared/animation/animation';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.scss'],
  animations: [CustomAnimation]
})
export class AlbumsDetailsComponent implements OnInit, OnDestroy {
  album: any;
  id: string;
  subscription: Subscription;

  constructor(private router: ActivatedRoute, private albumsService: AlbumsService, private route: Router) {
  }

  ngOnInit() {
    this.id = this.router.snapshot.params.id;
    if (!!this.albumsService.albumsStorage) {
      this.album = this.albumsService.getAlbumById(this.id);
    } else {
      this.subscription = this.albumsService.getAlbums().subscribe(resp => {
        this.album = resp.feed.entry[this.id];
      });
    }
  }

  onNavigateToList() {
    this.route.navigate(['app/albums/list']);
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
    this.albumsService.albumsStorage = null;
  }
}
