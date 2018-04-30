library dart_jsdaddy_school.src.routes.controllers;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import '../../middleware/currency.dart';

@Expose("/courses", middleware: const [addCurrencyRate])
class CoursesController extends Controller {
  @Expose("/")
  Future getCourses(num rate, ResponseContext res) async {
    var courses_content_array =
        (await app.service('api/courses').index({"lang": 'ru'}));
    var courses_content = courses_content_array.first;
    List course_content = await app.service('api/course').index({"lang": 'ru'});
    //TODO try use mongo projection
    courses_content['courses']['courseItems'] = course_content.map((data) {
      num uah = rate * int.parse(data["price"]);
      return {
        'title': data['title'],
        'sub_title': data['sub_title'],
        'logo': data['logo'],
        'price':
            'Стоимость: ${uah.round()}грн (экв. ${int.parse(data["price"])}\$)',
        'start_date': data['start_date'],
        'durations': data['durations'],
        'link_text': data['link_text'],
        'link_href': data['link_href'],
      };
    }).toList();

    await res.render('courses_landing', courses_content);
  }

  @Expose("/:id")
  Future getCourse(int id, ResponseContext res) async {
    var course_content = await app.service('api/course').index({"name": id});
    await res.render('course_landing', course_content.first);
  }
}
