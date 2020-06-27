import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    //template: '<h1>My App</h1><p>keeping track of media I want to watch</p>'
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    firstMediaItem = {
        id: 1,
        name: 'Firebug',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
      };

      onMediaItemDelete(mediaItem){

      }
}