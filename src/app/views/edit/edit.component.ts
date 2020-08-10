import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/postsModel';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post : Posts={userId: 0 , id: 0, title : '' , body : '' };
  constructor(private PS : PostsService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.getpost()
  }
  
  getpost(){
    const id = this.route.snapshot.params.id;
    this.PS.getSingle(id).subscribe(
      data =>{this.post = data }
    ) 
  }

  Editpost(mydata){
    console.log('vvv')
    const id = this.route.snapshot.params.id;
    this.PS.getSingle(id).subscribe(
    data =>{
      this.post = data
      this.PS.updataPosts(id , mydata).subscribe(
        data => console.log(data)
      )
    } 
    );
  }
}
 