import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelComponent }   from './panel.component';
import { UsersComponent }      from './users.component';
import { UserDetailComponent }  from './user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/panel', pathMatch: 'full' },
  { path: 'panel',  component: PanelComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'users',     component: UsersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
