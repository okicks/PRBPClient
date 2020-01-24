import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { ThreadComponent } from './components/thread/thread.component';
import { PostComponent } from './components/post/post.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { ThreadCreateComponent } from './components/thread/thread-create/thread-create.component';
import { ThreadDeleteComponent } from './components/thread/thread-delete/thread-delete.component';
import { ThreadEditComponent } from './components/thread/thread-edit/thread-edit.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostDeleteComponent } from './components/post/post-delete/post-delete.component';
import { PostEditComponent } from './components/post/post-edit/post-edit.component';

const routes: Routes = 
[
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { 
    path: 'forum', canActivate: [AuthGuard], children:
    [
      { path: 'category', component: CategoryComponent },
      { path: 'category/create', component: CategoryCreateComponent },
      { path: 'category/delete', component: CategoryDeleteComponent },
      { path: 'category/edit/:id', component: CategoryEditComponent },

      { path: 'thread/:catId', component: ThreadComponent },
      { path: 'thread/create/:catId', component: ThreadCreateComponent },
      { path: 'thread/delete/:id', component: ThreadDeleteComponent },
      { path: 'thread/edit/:catId/:id', component: ThreadEditComponent },

      { path: 'post/:thrId', component: PostComponent },
      { path: 'post/create/:thrId', component: PostCreateComponent },
      { path: 'post/delete/:id', component: PostDeleteComponent },
      { path: 'post/edit/:thrId/:id', component: PostEditComponent },
    ] 
  },
  
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
