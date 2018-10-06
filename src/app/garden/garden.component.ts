import { Component, OnInit } from '@angular/core';
import { Plants } from '../plants';
import { PLANTS } from '../mock-plants';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {

  Plants = PLANTS;
  selectPlants = Plants;

  constructor() { 
  }

  ngOnInit() {
  }

  onSelect(plants): void {
    this.selectPlants = plants;
  }

}
