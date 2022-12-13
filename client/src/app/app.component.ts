import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';






interface INewsfeedItem{
  title:string
  post: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = ' '
  public post  = ' '
  public newsfeedItems: INewsfeedItem[] = [
         {
                  title:'Hello',
                  post: 'first post'
         },
         {
                  title: 'another one',
                  post : 'another value'
         }
  ]

constructor (
  private httpClient: HttpClient
){}


async ngOnInit(){
  await this.loadNewsItems()
}

async loadNewsItems(){
         this.newsfeedItems = await this.httpClient.get<INewsfeedItem[]>('/api/newsfeed').firstValueFrom()
}

async addPost(){
         await this.httpClient.post('/api/newsfeed',{
                  title:this.title,
                  post:this.post
         }).firstValueFrom()
         await this.loadNewsItems()
         this.title = ''
         this.post = ''
 }
}
