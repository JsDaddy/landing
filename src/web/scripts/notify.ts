export function renderNotify(data: any): boolean {
  const element: HTMLElement | null = document.querySelector('.notification');

  if (!element) {
    return false;
  }

  if (!data.isOpen) {
    element.classList.add('none');
    return false;
  }

  element.classList.remove('none');

  const messageEl: HTMLElement | null = element.querySelector('.message');

  if (!messageEl) {
    return false;
  }

  messageEl.textContent = data.message;
  return true;
}
