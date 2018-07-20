export function startScroll(selector: string | null) {
  if (!selector) {
    return;
  }
  const to: number = (document.querySelector(selector) as HTMLElement).offsetTop + 80;
  _scroll(window.scrollY, to, 1000);
}

function _scroll(from: number, to: number, duration: number) {
  if (duration === 0) {
    return;
  }
  const step: number = (to - from) / duration;
  window.requestAnimationFrame(() => {
    window.scrollTo(from, from + step);
    _scroll(from + step, to, duration - 1);
  });
}
