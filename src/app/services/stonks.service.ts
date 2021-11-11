import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocksList: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let appService: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StonkInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StonksService {

  constructor(private http: HttpClient) { }

  get() {
    return stocksList.slice();
  }

  add(stockParam: string) {
    stocksList.push(stockParam);
    return this.get();
  }

  remove(stockParam: string) {
    stocksList.splice(stocksList.indexOf(stockParam), 1);
    return this.get();
  }

  loadStockValues(symbolsParam: Array<string>) {
    if (symbolsParam) {
      return this.http.get<Array<StonkInterface>>(appService + '/stocks/snapshot?symbols=' + symbolsParam.join());
    }
    return;
  }
}
