import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListViewsComponent } from './list-views/list-views.component';
import { LoginComponent } from './login/login.component';
import { ImagenRotaDirective } from './imagen-rota.directive';
import { MyFocusDirective } from './my-focus.directive';
import { UploadPageComponent } from './upload-page/upload-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CardComponent,
    PostDetailComponent,
    HomeComponent,
    ListViewsComponent,
    LoginComponent,
    ImagenRotaDirective,
    MyFocusDirective,
    UploadPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    //NgxDatatableModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
