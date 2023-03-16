import { Component, Input, OnInit } from '@angular/core';
import { Course } from "../../_system/_interfaces/course";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course

  constructor() { }

  ngOnInit(): void {}
}
