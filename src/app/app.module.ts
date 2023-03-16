import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { filterStocksPipe } from './pipes/filter-stocks';
import { ngxDecorateWithArrow } from './directives/ngx-decorate-with-arrow.directive';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    filterStocksPipe,
    ngxDecorateWithArrow,
    StockDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
