
import {Component, Input} from '@angular/core';
import {HomeInterface} from '../../models/home.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input()
  public homeModel: HomeInterface;

  constructor() {
  }

}
