import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list-views',
  templateUrl: './list-views.component.html',
  styleUrls: ['./list-views.component.css']
})
export class ListViewsComponent implements OnInit {
  
  constructor(
    private _RestService:RestService
  ) { }

  ngOnInit(): void {
    
  }

}