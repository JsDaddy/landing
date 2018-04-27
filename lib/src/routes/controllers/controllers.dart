library dart_jsdaddy_school.src.routes.controllers;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import 'package:mongo_dart/mongo_dart.dart';

@Expose("/courses")
class CoursesController extends Controller {
  @Expose("/")
  Future getCourses(Db db, ResponseContext res) async {
    var coll = db.collection('courses');
    var val = await coll.findOne(where.eq("lang", 'ru'));
    print(val);
    await res.render('courses_landing', val);
  }

  // You can return a response handler, and have it run as well. :)
  @Expose("/:id")
  Future getCourse(Db db, int id, ResponseContext res) async {
    print(id);
    var coll = db.collection('course');
    var val = await coll.findOne(where.eq("name", 'angular'));
    print(val);
    await res.render('course_landing', val);
  }
}
