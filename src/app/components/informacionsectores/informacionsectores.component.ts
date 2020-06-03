import { Component, OnInit } from '@angular/core';
import { MostrarService } from '../../services/mostrar.service';


@Component({
  selector: 'app-informacionsectores',
  templateUrl: './informacionsectores.component.html',
  styleUrls: ['./informacionsectores.component.css']
})
export class InformacionsectoresComponent implements OnInit {

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
