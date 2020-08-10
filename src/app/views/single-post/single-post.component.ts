import { Component, OnInit } from '@angular/core';
import { PostsService} from 'src/app/services/posts.service';
import { Posts} from 'src/app/models/postsModel';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post : Posts;

  constructor(private PS : PostsService , private route: ActivatedRoute , private router: Router ) { }

  ngOnInit() {
    this.getpost() 
   
  }
  
  getpost(){
    const id = this.route.snapshot.params.id;
    this.PS.getSingle(id).subscribe(
      data =>{this.post = data }
    ) 
  }

}
 


 