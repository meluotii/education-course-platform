import { Injectable } from '@angular/core';
import { LocalService } from "../local/local.service";

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor(private localService: LocalService) {}

  checkLocalStorageForProgress(id: string) {
    return !!this.localService.getData(id);
  }

  getProgressForCourse(id: string) {
    return this.localService.getData(id) // { time: N, order: N }
  }

  setProgressForCourse(id: string, lessonTime: number = 0, lessonOrder: number = 1) {
    this.localService.saveData(id, JSON.stringify({time: lessonTime, order: lessonOrder}))
  }
}
