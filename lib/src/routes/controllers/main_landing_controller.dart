library dart_jsdaddy_school.routes.controllers.main_landing_controller;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';

@Expose('/')
class MainController extends Controller {
  @Expose('/')
  Future getMain( ResponseContext res) async {
    var main_content_arr = await app.service('api/main').index();
    var main_content = main_content_arr.first;
    var headerArr = await app.service('api/menu').index({
      'query': {'section': 'main'}
    });
    main_content['header'] = headerArr.first;
    await res.render('main_landing', main_content);
  }
}
