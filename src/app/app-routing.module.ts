import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from 'src/app/views/all-posts/all-posts.component';
import { SinglePostComponent} from 'src/app/views/single-post/single-post.component';
import { EditComponent } from 'src/app/views/edit/edit.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path : '' , component : AllPostsComponent},
  {path : ':id' , component : SinglePostComponent},
  {path : 'edit/:id' , component : EditComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
