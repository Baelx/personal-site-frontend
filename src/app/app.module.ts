import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './blog/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListComponent } from './blog/post-list/post-list.component';
import { PostSingleComponent } from './blog/post-single/post-single.component';
import { BlogLatestComponent } from './blog/blog-latest/blog-latest.component';
import { ChartComponent } from './charts/chart/chart.component';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostCreateComponent,
    PostListComponent,
    PostSingleComponent,
    BlogLatestComponent,
    ChartComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    AppRoutingModule
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
