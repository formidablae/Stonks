import { Component } from '@angular/core';
import { StonksService, StonkInterface } from './services/stonks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stonks';
  
  stocksList: Array<StonkInterface>;
  
  constructor(serviceParam: StonksService) {
    serviceParam.loadStockValues(['AAPL'])?.subscribe(stocksElems => {
      this.stocksList = stocksElems;
    })
  }
}
