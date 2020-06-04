import { Component, OnInit } from '@angular/core';
import { MostrarService } from '../../services/mostrar.service';

@Component({
  selector: 'app-subsectores',
  templateUrl: './subsectores.component.html',
  styleUrls: ['./subsectores.component.css']
})
export class SubsectoresComponent implements OnInit {
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
