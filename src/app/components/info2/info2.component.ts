import { Component, OnInit } from '@angular/core';
import { MostrarService } from '../../services/mostrar.service';

@Component({
  selector: 'app-info2',
  templateUrl: './info2.component.html',
  styleUrls: ['./info2.component.css']
})
export class Info2Component implements OnInit {

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
