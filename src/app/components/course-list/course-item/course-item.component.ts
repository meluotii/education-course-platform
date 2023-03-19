import { Component, Input, OnInit } from '@angular/core';
import { Course } from "../../../_system/_interfaces/course";
import { VgApiService, VgEvents } from "@videogular/ngx-videogular/core";
import Hls from "hls.js";

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
