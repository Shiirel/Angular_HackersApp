import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './component/home/home';
import { APropos } from './component/a-propos/a-propos';
const routes: Routes = [
{path: 'home', component: Home},
{path: 'a-propos', component: APropos}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
