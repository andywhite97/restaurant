import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';
import { ImagesComponent } from './gallery/images/images.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TopComponent } from './menu/top/top.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DiscoverComponent } from './about/discover/discover.component';
import { BehindComponent } from './about/behind/behind.component';
import { ItemsComponent } from './menu/items/items.component';
import { OrderComponent } from './menu/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MapComponent,
    FormComponent,
    ImagesComponent,
    GalleryComponent,
    TopComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    DiscoverComponent,
    BehindComponent,
    ItemsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
