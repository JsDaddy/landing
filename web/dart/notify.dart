library scroll;

import 'dart:html';

bool renderNotify(Map<String, String> data) {
  DivElement el = querySelector('.notification');
  if (data['isOpen'] == false) {
     el.classes.add('none');
     return false;
  }
  el.classes.remove('none');
  el.querySelector('.message').text = data['message'];
  return true;
}
