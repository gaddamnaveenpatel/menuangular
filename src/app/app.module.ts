import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { MenuitemavilabiltyPipe } from './menuitemavilabilty.pipe'; // ✅ add this
import { MenufromComponent } from './menu/menufrom/menufrom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuitemlistComponent } from './menuitemlist/menuitemlist.component';
import { ParentComponent } from './comunctions/parent/parent.component';
import { ChildComponent } from './comunctions/child/child.component';

const routes:Routes =[

  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'menuform',component:MenufromComponent},
  {path:'Menuitemlist/:id',component:MenuitemlistComponent},
  {path:'parent',component:ParentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    MenuitemavilabiltyPipe,
    MenufromComponent,
    MenuitemlistComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
   ,HttpClientModule,
   FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
