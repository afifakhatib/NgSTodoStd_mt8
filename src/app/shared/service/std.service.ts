import { Injectable } from '@angular/core';
import { UuidService } from './uuid.service';
import { SnackBarService } from './snack-bar.service';
import { Istd } from '../component/stdTask/model/std.interface';

@Injectable({
  providedIn: 'root'
})
export class StdService {

  stdInfo : Array<Istd> = [
    {
      fname : 'jhon',
      lname  :'doe',
      email : 'jd@gmail.com',
      contact : 234567890,
      stdId : this._uuid.uuid()
    },
    {
      fname : 'may',
      lname  :'doe',
      email : 'md@gmail.com',
      contact : 234567890,
      stdId : this._uuid.uuid()
    },
    {
      fname : 'july',
      lname  :'doe',
      email : 'jd@gmail.com',
      contact : 234567890,
      stdId : this._uuid.uuid()
    },
    {
      fname : 'tony',
      lname  :'doe',
      email : 'td@gmail.com',
      contact : 234567890,
      stdId : this._uuid.uuid()
    }
  ]

  constructor(
    private _uuid : UuidService,
    private _snackBar  : SnackBarService
  ) { }

  fetchedStdInfo(){
      return this.stdInfo
  }

  createStdInfo(newStdInfo : Istd){
    this.stdInfo.push(newStdInfo)
    this._snackBar.openSnackBar(`${newStdInfo.fname} ${newStdInfo.lname} added Successfully!!`)
  }

  removestdInfo(removeStd : Istd){
    let Confermation = confirm(`Are you sure ? Do you want to remove ${removeStd.fname} ${removeStd.lname} student from table ?`)
    if(Confermation === true){
        let getindex = this.stdInfo.findIndex(remove => remove.stdId === removeStd.stdId)
        this.stdInfo.splice(getindex , 1)        
        this._snackBar.openSnackBar(`Student ${removeStd.fname} ${removeStd.lname} removed from table successfully!!`)
    }
  }
}


