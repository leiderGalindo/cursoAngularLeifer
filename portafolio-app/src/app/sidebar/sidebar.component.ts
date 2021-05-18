import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public listdeVideos:Array<any> =[];

  constructor(
    private _servicioFavorito: ServicioDeFavoritosService
  ) { }

  ngOnInit(): void {
    this._servicioFavorito.disparadorDeFavoritos.subscribe(data => {
      console.log('Recibiendo data...', data);
      this.listdeVideos.push(data);
    })
  }

}
