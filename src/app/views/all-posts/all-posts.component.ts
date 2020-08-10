import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Posts} from 'src/app/models/postsModel';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  Posts : Posts [] = [];
  constructor(private PS : PostsService , private router: Router ) {  this.AllPosts()}

  ngOnInit() {
    this.AllPosts()
  }

  
  AllPosts(){
    this.PS.getAllPosts().subscribe(
      data => this.Posts = data
    )
  }
  
  deletepost(id) {
    this.PS.deletePosts(id).subscribe(res =>{this.AllPosts()});
   /* this.router.navigateByUrl('/del', { skipLocationChange: true} )
    .then(() => {
      this.router.navigate(['']);
    });*/
    console.log('Done')
  }
}
