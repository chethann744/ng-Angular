import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.css']
})
export class DetailProfileComponent implements OnInit {
  prdName: String = '';
  qParam: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(paramsData => this.prdName = paramsData['pid']);
    this.activatedRoute.queryParams.subscribe(paramsData => this.qParam = paramsData);

  }
}

