import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListViewsComponent } from './list-views/list-views.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoginComponent } from './login/login.component';
import { VigilanteDobleGuard } from './vigilante-doble.guard';
import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'post/:variable',
    component:PostDetailComponent
  },
  {
    path:'list-video',
    component:ListViewsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'upload',
    component: UploadPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
