import { Component, OnInit } from '@angular/core';
import {Interaction} from '../models/interaction';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  interaction: Interaction;

  constructor()
  {
    this.interaction = new Interaction();
  }

  ngOnInit(): void {
  }

}
