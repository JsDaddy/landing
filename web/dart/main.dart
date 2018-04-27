import 'dart:html';
import 'dart:async';
import 'scroll.dart';
import 'store/store.dart';
import 'store/action/notify.dart';
import 'package:http/browser_client.dart';

main() {
  print('First script');
  print('ddd');
  store.onChange.listen((data) {
    print(data);
    DivElement el = querySelector('.notification');
    data['isOpen'] ? el.classes.remove('none') : el.classes.add('none');
  });
  // store.dispatch(new ShowNotify('Hi all'));
  // new Timer(Duration(seconds: 3), () {
  //   store.dispatch(new HideNotify());
  // });

  querySelectorAll('a[href^="#"]')
      .onClick
      .map((MouseEvent event) =>
          (event.target as AnchorElement).getAttribute('href'))
      .listen((String selector) => startScroll(selector));

  querySelector('contacts-form').addEventListener('form', (data) {
    var client = new BrowserClient();
    client
        .post('http://127.0.0.1:3000/mail', body: data.detail)
        .then((data) => print(data))
        .catchError((Error err) => print('Error'));

    // store.dispatch(new ShowNotify('Sorry, something went wrong, please contact us by direct email.')
    // try {
    //   var client = new BrowserClient();
    //   var response = await client.post('http://127.0.0.1:3000/mail', body: data.detail);
    //   print('response');
    //   store.dispatch(new ShowNotify('dd'));
    //   new Timer(Duration(seconds: 3), () {
    //     store.dispatch(new HideNotify());
    //   });
    // } catch (err) {
    //   store.dispatch(new ShowNotify(
    //       'Sorry, something went wrong, please contact us by direct email.'));
    //   new Timer(Duration(seconds: 3), () {
    //     store.dispatch(new HideNotify());
    //   });
    // }

    // print('Response status: ${response}');
    // print('Response body: ${response.body}');
  });
}
