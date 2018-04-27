library dart_jsdaddy_school.src.routes.controllers;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';

@Expose("/courses")
class CoursesController extends Controller {
  @Expose("/")
  Future getCourses(ResponseContext res) async {
    var courses_content =
        await app.service('api/courses').index({"lang": 'ru'});
    await res.render('courses_landing', courses_content.first);
  }

  @Expose("/:id")
  Future getCourse(int id, ResponseContext res) async {
    var course_content = await app.service('api/course').index({"name": id});
    await res.render('course_landing', course_content.first);

  }
}
