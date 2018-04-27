library dart_jsdaddy_school.routes.controllers.main_landing_controller;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import 'package:mongo_dart/mongo_dart.dart';

@Expose('/')
class MainController extends Controller {
  @Expose('/')
  Future getMain(Db db, ResponseContext res) async {
    var coll = db.collection('main');
    var val = await coll.findOne();
    print(val);
    await res.render('main_landing', val);
  }
}
