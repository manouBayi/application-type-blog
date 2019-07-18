import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PostListComponentComponent} from './post-list-component/post-list-component.component';
import {PostListComponentItemComponent} from './post-list-component-item/post-list-component-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListComponentItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
