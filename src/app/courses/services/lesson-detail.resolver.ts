import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./courses.service";
import { Injectable } from "@angular/core";
import { LessonDetail } from "../model/lesson-detail";

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {

    constructor(private coursesService: CoursesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<LessonDetail> {

        const courseUrl = route.parent.paramMap.get("courseUrl");
        const lessonSeqNo = route.paramMap.get("lessonSeqNo");

        return this.coursesService.loadLessonDetail(courseUrl, lessonSeqNo);
    }
    
}