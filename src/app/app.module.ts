import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PostListComponent} from './posts/post-list-component/post-list-component';
import {PostListComponentItemComponent} from './posts/post-list-component-item/post-list-component-item.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {NewPostComponent} from './posts/new-post/new-post.component';
import {PostService} from './services/post.service';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';


const appRoutes: Routes = [

  {path: 'posts', component: PostListComponent},
  {path: 'posts/new', component: NewPostComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListComponentItemComponent,
    FourOhFourComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
