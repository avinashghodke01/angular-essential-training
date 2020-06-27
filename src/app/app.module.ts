import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpXhrBackend} from '@angular/common/http';

import {routing} from './app.routing';

import {AppComponent} from './app.component'
import {MediaItemComponent} from './media-item.component';
import {MediaItemListComponent} from './media-item-list.component';
//import {MediaItemFormComponent} from './media-item-form.component'

import {FavoriteDirective} from './favorite.directive'
import {CategoryListPipe} from './category-list.pipe'

import { lookupListToken, lookupLists } from './provider'

import {MockXHRBackend} from './mock-xhr-backend';

import { NewItemModule } from './new-item/new-item.module';

// required only if @Injectable not used on service class
//import {MediaItemService} from './media-item.service';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        NewItemModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe
        //MediaItemFormComponent
    ],
    //// required only if @Injectable not used on service class
    //providers: [         MediaItemService    ],
    providers: [
        { provide: lookupListToken, useValue: lookupLists },
        { provide: HttpXhrBackend, useClass: MockXHRBackend }
    ],
    bootstrap: [
        AppComponent
    ]    
})
export class AppModule {}