import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
// import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListComponent } from './blog/post-list/post-list.component';
import { PostSingleComponent } from './blog/post-single/post-single.component';
import { BlogLatestComponent } from './blog/blog-latest/blog-latest.component';
import { ChartComponent } from './charts/chart/chart.component';
import { HomeComponent } from './pages/home/home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CodeComponent } from './pages/code/code.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostCategoriesComponent } from './blog/post-categories/post-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CodeComponent,
    PostListComponent,
    PostSingleComponent,
    BlogLatestComponent,
    ChartComponent,
    JumbotronComponent,
    BlogComponent,
    PostCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    // MatIconRegistry,
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
