import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitExampleComponent } from './init-example/init-example.component';
import { ObservableFinalizeComponent } from './observable-finalize/observable-finalize.component';

const routes: Routes = [
  { path: 'init-example', component: InitExampleComponent }, 
  { path: 'observ-finalize', component: ObservableFinalizeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
