import { Component, OnInit } from '@angular/core';
import { Plants } from '../plants';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {

  plant: Plants ={
    id: 1, 
    name: 'Belladonna'
  };

  constructor() { 
  }

  ngOnInit() {
  }
  
}
