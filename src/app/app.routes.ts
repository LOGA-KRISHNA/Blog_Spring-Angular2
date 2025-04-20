import { Routes } from '@angular/router';
import { CreatePostComponent } from '../pages/create-post/create-post.component';
import { HomeComponent } from '../pages/home/home.component';
import { PostComponent } from '../pages/post/post.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"post/:id",component:PostComponent},
    {path:"home",component:HomeComponent},
    {path:"createpost",component:CreatePostComponent},
    {path:"**",redirectTo:"home"} 
];
