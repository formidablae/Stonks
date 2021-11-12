import { Component, OnInit } from '@angular/core';
import { StonksService } from '../../services/stonks.service';

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {

  symbolsList: Array<string>;
  stockElem: string;

  constructor(private serviceParam: StonksService) {
    this.symbolsList = serviceParam.get();
  }

  add(): void {
    this.symbolsList = this.serviceParam.add(this.stockElem.toUpperCase());
    this.stockElem = "";
  }

  remove(symbolParam: string) {
    this.symbolsList = this.serviceParam.remove(symbolParam);
  }
}
