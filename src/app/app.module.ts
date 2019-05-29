import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './restaurant/detail/detail.component';
import { OrderComponent } from './order/order.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MenuItemsComponent } from './order/menu-items/menu-items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './order/history/history.component';
import { ListComponent } from './order/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    HomeComponent,
    DetailComponent,
    OrderComponent,
    MenuItemsComponent,
    HistoryComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
