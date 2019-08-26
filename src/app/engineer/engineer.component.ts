import { Component, OnInit } from '@angular/core';
import{Engineer} from '../engineer'
import {EngineerService} from '../engineer.service'
@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent implements OnInit {
  private EngineersUrl = 'https://localhost:5001';
  engineers:Engineer[];

  constructor(private engineerService:EngineerService) { }

  ngOnInit() {
    this.getEngineers();
  }
  
  getEngineers() :void{
    this.engineerService.getEngineers()
    .subscribe(engineers=>this.engineers = engineers)
  }
}
