import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './componenets/menu/dropdown/dropdown.component';
import { MenuComponent } from './componenets/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuModule } from './componenets/menu/menu.module';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './pages/home/card/card.component';
import { ArticleComponent } from './pages/article/article.component';
import { AsideArtComponent } from './pages/article/aside-art/aside-art.component';
import { MainArtComponent } from './pages/article/main-art/main-art.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DropdownComponent,
    HomeComponent,
    CardComponent,
    ArticleComponent,
    AsideArtComponent,
    MainArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
