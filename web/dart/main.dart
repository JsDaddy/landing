import 'dart:html';
import 'dart:async';
import 'store/store.dart';
import 'store/action/notify.dart';
import 'scroll.dart';
import 'notify.dart';

main() {
  store.onChange.listen((data) {

    renderNotify(data) ? new Timer(Duration(seconds: 3), () {
      store.dispatch(new HideNotify());
    }) : null;
  });

  querySelectorAll('a[href^="#"]')
      .onClick
      .map((MouseEvent event) =>
          (event.target as AnchorElement).getAttribute('href'))
      .listen((String selector) => startScroll(selector));

  HtmlElement CSForm = querySelector('contacts-form');
  CSForm != null
      ? querySelector('contacts-form').addEventListener('form', (dynamic data) {
          store.dispatch(new PendingNotify(data.detail));
        })
      : null;
}
