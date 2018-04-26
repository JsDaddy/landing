library dart_jsdaddy_school.services;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import 'package:mongo_dart/mongo_dart.dart';

/// Configure our application to use *services*.
/// Services must be wired to the app via `app.use`.
///
/// They provide many benefits, such as instant REST API generation,
/// and respond to both REST and WebSockets.
///
/// Read more here:
/// https://github.com/angel-dart/angel/wiki/Service-Basics
Future connectDb(Angel app) async {
  try {
    print(app.configuration['mongo_db']);
    var db = new Db(app.configuration['mongo_db']);
    await db.open();
    app.container.singleton(db);
  } catch (err) {
    print("Db ${err['errmsg']}");
  }
}
