import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {
  public previsualizacion: string;
  public archivos:any = [];
  public loading:boolean;

  constructor(
    private sanitizer: DomSanitizer,
    private rest: RestService
  ) { }

  ngOnInit(): void {
  }

  capturarFile(event): any{
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) =>{
      this.previsualizacion = imagen.base;
    });
    this.archivos.push(archivoCapturado);
  }

  extraerBase64 =  async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg =  window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader =  new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      }
    } catch(e){
      return null;
    }
  });

  /**
   * Limpiar imagen
   */

   clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }

  subirArchivo(): any{
    try{
      this.loading = true;
      const formularioDeDatos = [];
      this.archivos.forEach(archivo => {
        formularioDeDatos.push({'name': archivo.name});
      })
      
      this.rest.post(`http://localhost:3000/upload`, formularioDeDatos).subscribe(
        res => {
          this.loading = false;
          console.log('Respuesta de servidor', res);
          this.clearImage();
        }
      );
    } catch (e) {
      this.loading = false;
      console.log('Error', e);
    }
  }
}

