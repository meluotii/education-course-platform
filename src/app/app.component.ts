import { Component } from '@angular/core';
import { SpinnerService } from "./_system/_services/spinner/spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'education-app';
  public isLoadingSpinner = true;

  constructor(private spinnerService: SpinnerService,) {

    this.spinnerService.spinnerLoading$.subscribe(isLoading => {
      setTimeout(() => {
        this.isLoadingSpinner = isLoading;
      });
    });
  }

}
