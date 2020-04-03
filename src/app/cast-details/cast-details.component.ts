import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.scss']
})
export class CastDetailsComponent implements OnInit {
  id: String;
  private sub: any;
  detailsCast: Object;
  detailsCredit: Object;

  constructor(private _http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

    this._http.getDetailsOfCast(this.id).subscribe(data => {
      this.detailsCast = data;
      console.log(this.detailsCast);
    });

    this._http.getCreditsOfCast(this.id).subscribe(data => {
      this.detailsCredit = data;
      console.log(this.detailsCredit);
    });

  }
}
