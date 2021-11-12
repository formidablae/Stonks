import { Component, OnInit } from '@angular/core';
import { StonksService, StonkInterface } from '../../services/stonks.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stocksList: Array<StonkInterface>;
  symbolsList: Array<string>;

  constructor(private serviceArg: StonksService) {
    this.symbolsList = serviceArg.get();
  }

  ngOnInit(): void {
    this.serviceArg.loadStockValues(this.symbolsList)?.subscribe(stocksElems => this.stocksList = stocksElems)
  }
}
