import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from 'src/app/models/postsModel'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  ApiUrl = "https://jsonplaceholder.typicode.com/" ;
  constructor( private http : HttpClient) { }
  
  getAllPosts(){
    return this.http.get<Posts[]>("https://jsonplaceholder.typicode.com/posts");
  }
  
  getSingle(id : number ){
    return this.http.get<Posts>( this.ApiUrl +"posts/" + id)
  }
  
  updataPosts(id : any , post){
    return this.http.patch("https://jsonplaceholder.typicode.com/posts/" + id , post);
  } 

  deletePosts(id: any) {
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/" + id);
  }
}
