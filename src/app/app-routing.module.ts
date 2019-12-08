import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './blog/post-list/post-list.component';
import { PostCreateComponent } from './blog/post-create/post-create.component';
import { PostSingleComponent } from './blog/post-single/post-single.component';
import { HomeComponent } from './pages/home/home.component';
import { CodeComponent } from './pages/code/code.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create', component: PostCreateComponent },
    { path: 'blog', component: PostListComponent },
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
