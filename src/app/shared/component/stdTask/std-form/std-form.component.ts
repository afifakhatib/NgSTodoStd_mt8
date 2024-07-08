import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StdService } from 'src/app/shared/service/std.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  @ViewChild('stdForm') stdForm !: NgForm

  constructor(
    private _uuid : UuidService,
    private _std : StdService
  ) { }

  ngOnInit(): void {
  }


  onStdAdd(){
   if(this.stdForm.valid){
    let newStd = {...this.stdForm.value , stdId : this._uuid.uuid()}
      this._std.createStdInfo(newStd)
      this.stdForm.resetForm()
   }
  }
}
