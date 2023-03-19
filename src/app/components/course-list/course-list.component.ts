import { Component, OnInit } from '@angular/core';
import { Course } from "../../_system/_interfaces/course";
import { CourseService } from "../../_system/_services/course/course.service";
import { VgApiService } from "@videogular/ngx-videogular/core";
import Hls from "hls.js";
import { SpinnerService } from "../../_system/_services/spinner/spinner.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit{
  courseList: Course[] = []
  p: any // Pagination variable

  constructor(private courseService: CourseService, private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.courseService.getCourseList().subscribe((data) => {
      this.courseList = data.courses
      this.spinner.spinnerLoading$.next(false);
      this.courseList.forEach((course: Course) => {
        if (course.previewImageLink) {
          course.previewImageLink = course.previewImageLink + "/cover.webp"
        }
      })
    }, (error: any) => {
      console.log(error);
      this.spinner.spinnerLoading$.next(false);
    });
  }
}
