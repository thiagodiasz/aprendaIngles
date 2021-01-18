import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Check } from '../shared/check.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges{

  public checkPreto: string = '/assets/checkpreto.png'
  public checkVerde: string = '/assets/checkverde.png'

  @Input() public tentativas: number


  public checks: Check[] = [
     new Check(true), new Check(true), new Check(true)

  ]
  constructor() {

  }
  ngOnChanges() {

    if(this.tentativas !== this.checks.length){

      let indice = this.checks.length - this.tentativas

      this.checks[indice - 1].verde = false
    }

  }
  ngOnInit(){

  }
}


