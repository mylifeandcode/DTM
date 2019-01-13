import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitExampleComponent } from './init-example/init-example.component';

const routes: Routes = [
  { path: 'init-example', component: InitExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
