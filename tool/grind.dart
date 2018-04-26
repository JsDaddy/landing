// Grinder is not part of Angel, but you may consider using it
// to run tasks, a la Gulp.
//
// See its documentation here:
// https://github.com/google/grinder.dart

import 'package:grinder/grinder.dart';
import 'dart:io';
import 'package:sass/sass.dart' as sass;

main(args) => grind(args);

@Task()
test() => new TestRunner().testAsync();

@DefaultTask()
@Depends(test)
build() {
  Pub.build();
}

@Task()
clean() => defaultClean();


@Task()
compile_sass(){


 // var systemTempDir = new Directory('web/sass');
  var result = sass.compile('web/sass/index.sass');
  new File('web/css/site.css').writeAsStringSync(result,mode: FileMode.APPEND);
  // List directory contents, recursing into sub-directories,
  // but not following symbolic links.
//  systemTempDir.list(recursive: false, followLinks: false)
//      .listen((FileSystemEntity entity) {
//    print(entity);
//
//  });
}