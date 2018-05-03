library dart_jsdaddy_school.src.routes.controllers;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import '../../middleware/currency.dart';
import '../../middleware/language_menu.dart';
import '../../middleware/menu.dart';
import '../../middleware/courses_content.dart';
import '../../middleware/course_content.dart';
import '../../middleware/form.content.dart';
import '../../middleware/advantages.content.dart';

@Expose("/:lang/courses", middleware: const [addLanguagesMenu, addCurrencyRate])
class CoursesController extends Controller {
  @Expose("/")
  Future getCourses() async {
    return waterfall([
      getMenu('courses'),
      getForm('courses'),   
      getAdvantages('courses'),
      getCoursesContent,
      (courses_content, RequestContext req, ResponseContext res) async {
        await res.render('courses_landing', courses_content);
      }
    ]);
  }

  @Expose("/:id")
  Future getCourse() async {
    return waterfall([
      getMenu('course'),
      getForm('course'),   
      getAdvantages('course'),    
      getCourseContent,
      (course_content, RequestContext req, ResponseContext res) async {
        await res.render('course_landing', course_content);
      }
    ]);
  }
}
