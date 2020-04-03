import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.scss']
})
export class CastDetailsComponent implements OnInit {

  constructor(private _http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }



}
