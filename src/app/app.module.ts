import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { PanelComponent } from './panel.component';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	InMemoryWebApiModule.forRoot(InMemoryDataService),
	AppRoutingModule
   ],
  declarations: [ 
  AppComponent,
  UserDetailComponent,
  UsersComponent,
  PanelComponent 
  ],
  providers: [
  	UserService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
