import { Injectable } from "@angular/core";
import { LessonSummary } from "../model/lesson-summary";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./courses.service";

@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]> {

    constructor(private coursesService: CoursesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<LessonSummary[]> {
        const courseUrl = route.paramMap.get("courseUrl");
        return this.coursesService.loadAllCourseLessonsSummary(courseUrl);
    }
    

}