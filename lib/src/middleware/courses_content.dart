library dart_jsdaddy_school.src.middleware.courses_content;

import 'dart:convert';
import 'package:angel_framework/angel_framework.dart';

getCoursesContent(
    Angel app, header, form, advantages, rate, lang, RequestContext req, res) async {
  try {
    List course_content = await app.service('api/course').index({
      "query": {'lang': lang, 'hidden': false}
    });
    var courses_content_array = await app.service('api/courses').index({
      "query": {'lang': lang}
    });
    var courses_content = courses_content_array.first;
    courses_content['header'] = header;
    courses_content['form'] = form;
    courses_content['advantages'] = advantages;

    courses_content['courses']['courseList'] =
        json.encode(course_content.map((data) {
      return {'title': data['title'], 'id': data['link_href']};
    }).toList());

    courses_content['courses']['courseItems'] = course_content.map((data) {
      num uah = rate * int.parse(data["price"]);
      data.addAll({
        'price':
            '${uah.round()}\₴ (~${int.parse(data["price"])}\$)',
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

    req.params['courses_content'] = courses_content;
    return true;
  } catch (err) {
    print(err);
    throw new AngelHttpException.notFound();
  }
}
