library scroll;

import 'dart:html';

startScroll(String selector) {
  int to = querySelector(selector).offsetTop + 80;
  _scroll(window.scrollY, to, 60);
}

_scroll(num from, int to, int duration) {
  if (duration == 0) {
    return;
  }
  double step = (to - from) / duration;
  window.requestAnimationFrame((a) {
    window.scrollTo(from, from + step);
    _scroll(from + step, to, duration - 1);
  });
}
