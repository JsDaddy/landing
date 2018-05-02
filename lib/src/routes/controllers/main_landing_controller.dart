library dart_jsdaddy_school.routes.controllers.main_landing_controller;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import '../../middleware/menu.dart';
import '../../middleware/main_content.dart';
import '../../middleware/form.content.dart';

@Expose('/')
class MainController extends Controller {
  @Expose('/')
  Future getMain() async {
    return waterfall([
      getMenu('main'),     
      getForm('main'),       
      getMainContent,
      (main_content, RequestContext req, ResponseContext res) async {
        await res.render('main_landing', main_content);
      }
    ]);
  }
}
