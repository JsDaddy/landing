import 'dart:html';
import 'scroll.dart';

main() {
  print('First script');
  querySelectorAll('#menu li > a')
      .onClick
      .map((MouseEvent event) =>
          (event.target as AnchorElement).getAttribute('href'))
      .listen((String selector) => startScroll(selector));
}
