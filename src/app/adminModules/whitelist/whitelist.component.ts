import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-whitelist',
  templateUrl: './whitelist.component.html',
  styleUrls: ['./whitelist.component.scss']
})
export class WhitelistComponent implements OnInit {
  @Input() whitelist: any[];
  constructor() { }

  ngOnInit(): void {
  }
  public processList(evt){
    console.log(evt);
  }
}
