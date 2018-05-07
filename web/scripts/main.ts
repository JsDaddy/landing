import { startScroll } from './scroll';

const menuItems = document.querySelectorAll('a[href^="#"]');

Array.prototype.forEach.call(menuItems, (item: HTMLAnchorElement) => {
  item.addEventListener('click', (e: MouseEvent) => {
    const selector: string | null = (e.target as HTMLAnchorElement).getAttribute('href');
    startScroll(selector);
  });
});
