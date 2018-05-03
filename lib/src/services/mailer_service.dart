library dart_jsdaddy_school.mailer.service;

import 'dart:async';
import 'package:angel_framework/angel_framework.dart';
import 'package:mailer/mailer.dart';

/// Configure our application to use *services*.
/// Services must be wired to the app via `app.use`.
///
/// They provide many benefits, such as instant REST API generation,
/// and respond to both REST and WebSockets.
///
/// Read more here:
/// https://github.com/angel-dart/angel/wiki/Service-Basics
Future mailer(Angel app) async {
  try {
    var options = new SmtpOptions()
    ..hostName = app.configuration['emailhostName']
    ..port = app.configuration['emailport']
    ..username = app.configuration['username']
    ..password = app.configuration['password'];

    var emailTransport = new SmtpTransport(options);

    app.container.singleton(emailTransport);  
  } catch (err) {
    print("Db connection ${err['errmsg']}");
  }
}
