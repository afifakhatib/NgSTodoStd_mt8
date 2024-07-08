import { Component, OnInit } from '@angular/core';
import { SnackBarService } from './shared/service/snack-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NgSTodoStd_mt8';

  constructor(
    private _snackBar : SnackBarService
  ){}

  ngOnInit(): void {
      this._snackBar.openSnackBar(`fetched Todo Data And Std data successfully!!`)
  }
}
