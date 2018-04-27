library dart_jsdaddy_school;

import 'dart:async';
import 'package:angel_cors/angel_cors.dart';
import 'package:angel_framework/angel_framework.dart';
import 'package:file/local.dart';
import 'src/config/config.dart' as configuration;
import 'src/routes/routes.dart' as routes;
import 'src/services/connect_db_service.dart';
import 'src/services/mailer_service.dart';

/// Configures the server instance.
Future configureServer(Angel app) async {
  // Enable CORS
  app.use(cors());
  // Set up our application, using the plug-ins defined with this project.
  await app.configure(configuration.configureServer(const LocalFileSystem()));
  await app.configure(connectDb);
  await app.configure(mailer);
  await app.configure(routes.configureServer(const LocalFileSystem()));
}
