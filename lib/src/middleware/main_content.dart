library dart_jsdaddy_school.src.middleware.main_content;

// import 'dart:convert';
import 'package:angel_framework/angel_framework.dart';

getMainContent(
    Angel app, header, form, RequestContext req, res) async {
  try {
    var main_content_arr = await app.service('api/main').index();
    var main_content = main_content_arr.first;
    main_content['header'] = header;
    main_content['form'] = form;
    
    req.params['main_content'] = main_content;
    return true;
  } catch (err) {
    print(err);
    throw new AngelHttpException.notFound();
  }
}
