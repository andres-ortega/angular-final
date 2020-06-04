import { Component, OnInit } from '@angular/core';
import { MostrarService } from '../../services/mostrar.service';

@Component({
  selector: 'app-info3',
  templateUrl: './info3.component.html',
  styleUrls: ['./info3.component.css']
})
export class Info3Component implements OnInit {

  items:any;

  constructor(private Mostrar:MostrarService) { 
    this.Mostrar.retornaItems().subscribe(items=>{
      this.items=items;
      console.log(this.items)
    });
  }

  ngOnInit() {
  }

}
