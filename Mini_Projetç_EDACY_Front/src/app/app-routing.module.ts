import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EditComponent } from './edit/edit.component';
AcceuilComponent
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/acceuil' },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
