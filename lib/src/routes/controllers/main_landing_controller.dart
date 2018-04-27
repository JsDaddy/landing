library dart_jsdaddy_school.routes.controllers.main_landing_controller;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';

@Expose('/')
class MainController extends Controller {
  @Expose('/')
  Future getMain(ResponseContext res) async {
    var main_content = await app.service('api/main').index();
    await res.render('main_landing', main_content.first);
  }
}
