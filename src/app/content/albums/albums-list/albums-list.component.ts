import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

import {AlbumsService} from '../../../shared/services/albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  form: FormGroup;
  albumsDetails: any = {entry: []};

  constructor(private albumService: AlbumsService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.albumService.getAlbums().subscribe((resp: any) => {
      console.log(resp.feed);
      this.albumsDetails = resp.feed;
      this.albumService.albumsStorage = resp.feed;
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      search: [''],
    });
  }

  onShowDetails(index): void {
    this.router.navigate(['app/albums/details/' + index]);
  }

}
