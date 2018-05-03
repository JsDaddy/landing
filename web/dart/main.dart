import 'dart:html';
import 'dart:async';
import 'store/store.dart';
import 'store/action/notify.dart';
import 'scroll.dart';
import 'notify.dart';

main() {
  var contacts_form = document.querySelector('contacts-form');  

  store.onChange.listen((data) {
    renderNotify(data) ? new Timer(Duration(seconds: 3), () {
      store.dispatch(new HideNotify());
    }) : null;
    contacts_form.setAttribute('loading', data['isLoading']);
  });

  querySelectorAll('a[href^="#"]')
      .onClick
      .map((MouseEvent event) =>
          (event.target as AnchorElement).getAttribute('href'))
      .listen((String selector) => startScroll(selector));

  HtmlElement CSForm = querySelector('.contact_us');
  CSForm != null
      ? querySelector('.contact_us').addEventListener('form', (dynamic data) {
          store.dispatch(new PendingNotify({'url': 'mail/contacts', 'data': data.detail }));
        })
      : null;


  HtmlElement CSCForm = querySelector('.apply_course');
  CSCForm != null
      ? querySelector('.apply_course').addEventListener('form', (dynamic data) {
          store.dispatch(new PendingNotify({'url': 'mail/course', 'data': data.detail }));
        })
      : null;
}
