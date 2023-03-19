import { Component, OnInit } from '@angular/core';
import { SpinnerService } from "../../_system/_services/spinner/spinner.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private spinner: SpinnerService) {
  }
  ngOnInit() {
    this.spinner.spinnerLoading$.next(false)
  }

}
