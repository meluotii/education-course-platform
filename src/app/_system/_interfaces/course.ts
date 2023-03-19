export interface Course {
  id:                    string;
  title:                 string;
  tags:                  string[];
  launchDate:            string;
  status:                string;
  description:           string;
  duration:              number;
  lessonsCount:          number;
  containsLockedLessons: boolean;
  previewImageLink:      string;
  rating:                number;
  meta:                  Meta;
  lessons?:              Lesson[]
}

export interface Meta {
  slug:               string;
  skills:             string[];
  courseVideoPreview: CourseVideoPreview;
}

export interface CourseVideoPreview {
  link:             string;
  duration:         number;
  previewImageLink: string;
}

export interface Lesson {
  id: string
  title: string
  duration: number
  order: number
  type: string
  status: string
  link: string
  previewImageLink: string
  meta: any
}
