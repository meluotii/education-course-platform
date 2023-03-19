import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { Course, Lesson } from "../../_system/_interfaces/course";
import { CourseService } from "../../_system/_services/course/course.service";
import { ActivatedRoute } from '@angular/router';
import { LocalService } from "../../_system/_services/local/local.service";
import { ProgressService } from "../../_system/_services/progress/progress.service";
import { SpinnerService } from "../../_system/_services/spinner/spinner.service";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  course: Course
  lessons: Lesson[]

  currentIndex = 0;
  activeLesson: Lesson;
  progressTime: number = 0;

  isQuiz: boolean


  constructor(
    private spinner: SpinnerService,
    private titleService: Title,
    private courseService: CourseService,
    private localService: LocalService,
    private progressService: ProgressService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']

    this.spinner.spinnerLoading$.next(true);
    this.courseService.getCourse(id).subscribe((data) => {
      this.course = data
      this.lessons = data.lessons
      this.spinner.spinnerLoading$.next(false);
      this.titleService.setTitle(this.course.title);
      this.sortLessonsByOrder()
      this.setProgress(id)
      this.isTypeQuiz()
    }, (error: any) => {
      console.log(error);
      this.spinner.spinnerLoading$.next(false);
    });
  }


  isTypeQuiz() {
    this.lessons.forEach((lesson: Lesson) => {
      this.isQuiz = lesson.type === 'quiz_simulator'
    })
  }

  sortLessonsByOrder() {
    this.lessons = this.lessons.sort((a: Lesson, b: Lesson) => {
      return a.order - b.order;
    });
  }

  setProgress(id: string) {
    let localStorageProgressData = this.progressService.getProgressForCourse(id)
    if (localStorageProgressData) {
      let progress = JSON.parse(localStorageProgressData)
      if (this.progressService.checkLocalStorageForProgress(id)) {
        let progressLesson = this.lessons.find((lesson: Lesson) => lesson.order === progress.order)
        if (progressLesson) {
          this.activeLesson = progressLesson
          this.progressTime = progress.time
        }
      }
    } else {
      this.progressService.setProgressForCourse(id)
      this.activeLesson = this.lessons[0]
    }
  }

  // Videoplayer


  saveProgressToLocalStorage(id: string, event: any) {
    this.progressService.setProgressForCourse(id, event.target.currentTime, this.activeLesson.order)
  }

  onClickLessonsVideo(lesson: Lesson, index: number) {
    this.currentIndex = index;
    this.activeLesson = lesson;
  }

  playNextLesson() {
    this.currentIndex++;
    let nextLesson = this.lessons[this.currentIndex]

    if (this.currentIndex === this.lessons.length) {
      this.currentIndex = 0;
    }

    if (nextLesson.status === 'unlocked') {
      this.activeLesson = nextLesson;
    }
  }
}
