import { Component, OnInit } from '@angular/core';
import { AgregarService } from 'src/app/services/agregar.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  item:any={ sector:''};
  constructor(private serv:AgregarService) { }

  ngOnInit() {
  }

  agregar(){
    this.serv.addItem(this.item);
  }

}
