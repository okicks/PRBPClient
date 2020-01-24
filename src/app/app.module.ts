import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreadComponent } from './components/thread/thread.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryComponent } from './components/category/category.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostEditComponent } from './components/post/post-edit/post-edit.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { ThreadCreateComponent } from './components/thread/thread-create/thread-create.component';
import { ThreadEditComponent } from './components/thread/thread-edit/thread-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadComponent,
    PostComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    PostCreateComponent,
    PostEditComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    ThreadCreateComponent,
    ThreadEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
