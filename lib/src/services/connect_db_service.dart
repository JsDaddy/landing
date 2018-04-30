library dart_jsdaddy_school.db.service;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import 'package:mongo_dart/mongo_dart.dart';
import 'package:angel_mongo/angel_mongo.dart';

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
    var db = new Db(app.configuration['mongo_db']);
    await db.open();
    app.container.singleton(db);
    app.use('/api/languages', new MongoService(db.collection("languages")));
    app.use('/api/menu', new MongoService(db.collection("menu")));
    app.use('/api/main', new MongoService(db.collection("main")));
    app.use('/api/courses', new MongoService(db.collection("courses")));
    app.use('/api/course', new MongoService(db.collection("course")));
    app.use('/api/contacts', new MongoService(db.collection("contacts")));
  } catch (err) {
    print("Db connection ${err['errmsg']}");
  }
}
