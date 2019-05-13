import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { BookModule } from './books/book.module';
import { CustomerModule } from './customer/customer.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ResourceNotFoundComponent } from './404.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BookModule,
    CustomerModule,
    RouterModule.forRoot([
      { path: "", component: WelcomeComponent, pathMatch: "full"},
      { path: "404", component: ResourceNotFoundComponent },
      { path: "**", redirectTo: "/404" }
    ]),
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}