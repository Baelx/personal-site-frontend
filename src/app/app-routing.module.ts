import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostSingleComponent } from './blog/post-single/post-single.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CodeComponent } from './pages/code/code.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: PostSingleComponent},
    { path: 'code', component: CodeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
