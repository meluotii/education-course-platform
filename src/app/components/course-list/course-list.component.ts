import { Component, OnInit } from '@angular/core';
import { Course } from "../../_system/_interfaces/course";
import { CourseService } from "../../_system/_services/course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit{
  courseList: Course[] = []

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourseList().subscribe((data) => {
      this.courseList = data.courses
      console.log(data)
    })
  }
}
