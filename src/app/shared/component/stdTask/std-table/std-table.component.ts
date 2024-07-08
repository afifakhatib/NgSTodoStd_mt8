import { Component, OnInit } from '@angular/core';
import { Istd } from '../model/std.interface';
import { StdService } from 'src/app/shared/service/std.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  stdArr !: Array<Istd>

  constructor(
    private _std : StdService
  ) { }

  ngOnInit(): void {
  this.stdArr =  this._std.fetchedStdInfo()
  }

  onStdRemove(removeStd : Istd){
      this._std.removestdInfo(removeStd)
  }



}
