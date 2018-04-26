library dart_jsdaddy_school;

import 'dart:async';
import 'package:angel_cors/angel_cors.dart';
import 'package:angel_framework/angel_framework.dart';
import 'package:file/local.dart';
import 'src/config/config.dart' as configuration;
import 'src/routes/routes.dart' as routes;
import 'src/services/services.dart' as services;
import 'package:mongo_dart/mongo_dart.dart';

/// Configures the server instance.
Future configureServer(Angel app) async {
  // Enable CORS
  app.use(cors());

  // Set up our application, using the plug-ins defined with this project.
  await app.configure(configuration.configureServer(const LocalFileSystem()));
  await app.configure(services.configureServer);
  await app.configure(routes.configureServer(const LocalFileSystem()));


  // TODO try move this
//  var db = new Db("mongodb://localhost:27017/db");
//  await db.open();
//  app.container.singleton(db);
}
