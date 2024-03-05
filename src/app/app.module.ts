import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms'; 


const appRoutes: Routes = [
  {
    path: '', component: MainContentComponent
  },
  {
    path: 'details', component: DetailsComponent
  } 
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    DetailsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
