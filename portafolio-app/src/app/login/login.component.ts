import { CookieService } from 'ngx-cookie-service';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _RestService: RestService,
    //private cookieService: CookieService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  enviarDatos(): any {
    this._RestService.post(`http://localhost:3000/login`,this.form.value).subscribe((res: any) => {
        console.log('Login Exitoso!!',res.accessToken);
        //this.cookieService.set('token_access', res.accessToken, 4, '/');
        this._router.navigate(['list-video'])
    });
  }

}