import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "../model/course";
import { Injectable } from "@angular/core";
import { CoursesService } from "./courses.service";

@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(private coursesService: CoursesService) {}

    // http://localhost:4200/courses/angular-router-course
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Course> {
        const courseUrl = route.paramMap.get("courseUrl");
        return this.coursesService.loadCourseByUrl(courseUrl);
    }

}