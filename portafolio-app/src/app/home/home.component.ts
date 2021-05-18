import { Component, OnInit } from '@angular/core';
import { RestService } from "../rest.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listdeVideos:any = [];

  constructor(
    private _restService: RestService
  ) {}

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this._restService.get('http://localhost:3000/posts').subscribe(
      response => {
        this.listdeVideos = response;
      },
      error =>{
        var errorMessage = <any>error;

        if(errorMessage != null){
            var body = JSON.parse(error._body);

            console.log(error);
        }
      }
    )
  }
}
