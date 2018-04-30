library dart_jsdaddy_school.src.routes;

import 'package:angel_framework/angel_framework.dart';
import 'package:angel_static/angel_static.dart';
import 'package:file/file.dart';
import 'controllers/courses_landing_controller.dart';
import 'controllers/main_landing_controller.dart';
import 'controllers/mailer_controller.dart';

/// Put your app routes here!
///
/// See the wiki for information about routing, requests, and responses:
/// * https://github.com/angel-dart/angel/wiki/Basic-Routing
/// * https://github.com/angel-dart/angel/wiki/Requests-&-Responses
AngelConfigurer configureServer(FileSystem fileSystem) {
  return (Angel app) async {
    // Typically, you want to mount controllers first, after any global middleware.
    await app.configure(new MainController().configureServer);
    await app.configure(new CoursesController().configureServer);
    await app.configure(new MailerController().configureServer);

    // Mount static server at web in development.
    // This variant of `VirtualDirectory` also sends `Cache-Control` headers.
    //
    // In production, however, prefer serving static files through NGINX or a
    // similar reverse proxy.
    //
    // Read the following two sources for documentation:
    // * https://medium.com/the-angel-framework/serving-static-files-with-the-angel-framework-2ddc7a2b84ae
    // * https://github.com/angel-dart/static
    var vDir = new CachingVirtualDirectory(app, fileSystem,
        source: fileSystem.directory('public'), noCache: true);
    app.use(vDir.handleRequest);

    // Throw a 404 if no route matched the request.
    app.use(() => throw new AngelHttpException.notFound());

    // Set our application up to handle different errors.
    //
    // Read the following for documentation:
    // * https://github.com/angel-dart/angel/wiki/Error-Handling
    app.errorHandler = (e, req, res) async {
      var errror_content_data = {'back': 'javascript:history.back()'};
      if (e.statusCode == 404) {
        return await res.render('error', errror_content_data);
      }

      return await res.render('error', errror_content_data);
    };
  };
}
