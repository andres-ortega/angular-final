import { Component, OnInit } from '@angular/core';
import { MostrarService } from '../../services/mostrar.service';

@Component({
  selector: 'app-stakeholder3',
  templateUrl: './stakeholder3.component.html',
  styleUrls: ['./stakeholder3.component.css']
})
export class Stakeholder3Component implements OnInit {

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
