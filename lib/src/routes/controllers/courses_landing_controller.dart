library dart_jsdaddy_school.src.routes.controllers;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import '../../middleware/currency.dart';
import '../../middleware/language_menu.dart';

@Expose("/:lang/courses", middleware: const [addLanguagesMenu, addCurrencyRate])
class CoursesController extends Controller {
  @Expose("/")
  Future getCourses(
      String lang, languages, num rate, ResponseContext res) async {
    var courses_content_array = await app.service('api/courses').index({
      "query": {'lang': lang}
    });

    if (courses_content_array.isEmpty) {
      return res.render('error');
    }

    var courses_content = courses_content_array.first;

    var headerArr = await app.service('api/menu').index({
      'query': {'section': 'courses', 'lang': lang}
    });
    //TODO try DRY
    var header = headerArr.first;
    header['languages'] = languages;
    courses_content['header'] = header;

    List course_content = await app.service('api/course').index({
      "query": {'lang': lang}
    });
    //TODO try use mongo projection
    courses_content['courses']['courseItems'] = course_content.map((data) {
      num uah = rate * int.parse(data["price"]);
      data.addAll({
        'price':
            'Стоимость: ${uah.round()}грн (экв. ${int.parse(data["price"])}\$)',
        'link_href': '/$lang/courses/${data['link_href']}',
      });
      return data;
    }).toList();

    courses_content['ourTeachers']['sliderTeachers'] = course_content
        .map((data) => data['teachers'])
        .toList()
        .reduce((acc, next) {
      if (acc == null) {
        acc = [];
      }
      acc.addAll(next);
      return acc;
    }).toList();

    await res.render('courses_landing', courses_content);
  }

  @Expose("/:id")
  Future getCourse(String lang, languages, int id, ResponseContext res) async {
    var course_content_arr = await app.service('api/course').index({
      "query": {'lang': lang, "link_href": id}
    });

    if (course_content_arr.isEmpty) {
      return res.render('error');
    }
    var course_content = course_content_arr.first;
    var headerArr = await app.service('api/menu').index({
      'query': {'section': 'course', 'lang': lang}
    });
    var header = headerArr.first;
    header['languages'] = languages;
    course_content['header'] = header;

    await res.render('course_landing', course_content);
  }
}
