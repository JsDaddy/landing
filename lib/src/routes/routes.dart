library dart_jsdaddy_school.src.routes;

import 'package:angel_framework/angel_framework.dart';
import 'package:angel_static/angel_static.dart';
import 'package:file/file.dart';
import 'controllers/courses_landing_controller.dart';
import 'controllers/main_landing_controller.dart';
import 'controllers/mailer_controller.dart';

AngelConfigurer configureServer(FileSystem fileSystem) {
  return (Angel app) async {
    await app.configure(new MainController().configureServer);
    await app.configure(new CoursesController().configureServer);
    await app.configure(new MailerController().configureServer);

    var vDir = new CachingVirtualDirectory(app, fileSystem,
        source: fileSystem.directory('public'), noCache: true);
    app.use(vDir.handleRequest);
    app.use(() => throw new AngelHttpException.notFound());
    app.errorHandler = (e, req, res) async {
      var errror_content_data = {'back': 'javascript:history.back()'};
      if (e.statusCode == 404) {
        return await res.render('error', errror_content_data);
      }

      return await res.render('error', errror_content_data);
    };
  };
}
