import 'dart:html';
import 'dart:async';
import 'scroll.dart';
import 'store/store.dart';
import 'store/action/notify.dart';

main() {
  print('First script');

  store.onChange.listen((data) {
    DivElement el = querySelector('.notification');
    data['isOpen'] ? el.classes.remove('none') :  el.classes.add('none');;
  });
  store.dispatch(new ShowNotify('Hi all'));
  new Timer(Duration(seconds: 3), () {
    store.dispatch(new HideNotify());
  });


  querySelectorAll('a[href^="#"]')
      .onClick
      .map((MouseEvent event) =>
          (event.target as AnchorElement).getAttribute('href'))
      .listen((String selector) => startScroll(selector));
}
