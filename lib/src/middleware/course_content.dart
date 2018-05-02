library dart_jsdaddy_school.src.middleware.course_content;

import 'dart:convert';
import 'package:angel_framework/angel_framework.dart';

getCourseContent(
    Angel app, header, lang, int id, num rate, RequestContext req, res) async {
  try {
    var course_content_arr = await app.service('api/course').index({
      "query": {'lang': lang, "link_href": id}
    });

    var course_content = course_content_arr.first;
    course_content['header'] = header;

    List all_courses_content = await app.service('api/course').index({
      "query": {'lang': lang}
    });

    course_content['courseItems'] = json.encode(all_courses_content.map((data) {
      data.addAll({'id': data['link_href']});
      return data;
    }).toList());

    req.params['course_content'] = course_content;
    return true;
  } catch (err) {
    print(err);
    throw new AngelHttpException.notFound();
  }
}
