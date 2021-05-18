import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public respuesta:any = [];
  public comentarios:any = [];
  public comentarioText:string;
  public form: FormGroup;

  constructor(
    private _route:ActivatedRoute,
    private _RestService:RestService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap;
      this.cargarData(params.variable)
      this.cargarComentarios();
    })

    this.form = this._formBuilder.group(
      {
        textAreaComentario: ['']
      }
    );
  }

  cargarData(id:string){
    this._RestService.get('http://localhost:3000/posts/'+id).subscribe(
      response => {
        this.respuesta = response;
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

  cargarComentarios(){
    this._RestService.get('http://localhost:3000/comments').subscribe(
      response => {
        this.comentarios = response;
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

  public enviarData(){
    console.log(this.form.value);
    this._RestService.post('http://localhost:3000/comments', {text:this.form.value.textAreaComentario}).subscribe(
      response => {
        console.log('comentario enviado!!!');
        this.form.reset();
        this.cargarComentarios()
      }
    )
  }

}
