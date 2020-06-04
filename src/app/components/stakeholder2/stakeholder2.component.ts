import { Component, OnInit } from '@angular/core';
import { MostrarService } from '../../services/mostrar.service';

@Component({
  selector: 'app-stakeholder2',
  templateUrl: './stakeholder2.component.html',
  styleUrls: ['./stakeholder2.component.css']
})
export class Stakeholder2Component implements OnInit {

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
