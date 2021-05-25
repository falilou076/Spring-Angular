import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FormsComponent } from './forms/forms.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'form', component: FormsComponent },
  { path: 'liste', component: ListeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
