import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { CalDiscountPipe } from './Pipes/cal-discount.pipe';
import { MyHighlightDirective } from './Directives/my-highlight.directive';
import { ItemDetailsComponent } from './Components/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    CalDiscountPipe,
    MyHighlightDirective,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'items', component: HomeComponent },
      {path: 'item-details/:index', component: ItemDetailsComponent},
      {path:'', redirectTo:'items', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
