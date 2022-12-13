import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PostComponent } from './post/post.component';
import { MypipePipe } from './mypipe.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations : [
    AppComponent,
    PostComponent,
    MypipePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}