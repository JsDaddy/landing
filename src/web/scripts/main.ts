import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { renderNotify } from './notify';
import * as NotifyActions from './store/actions/notify.actions';
import { rootEpic } from './store/epics/notify.epic';
import { notify } from './store/reducer/notify.reducer';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  notify,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(epicMiddleware),
);

const contactsForm: HTMLElement | null = document.querySelector('contacts-form');
const contactUsEl: HTMLElement | null = document.querySelector('.contact_us');
const applyCourseEl: HTMLElement | null = document.querySelector('.apply_course');

store.subscribe(() => {
  const data = store.getState();
  if (!data) {
    return;
  }
  if (renderNotify(data)) {
    setTimeout(() => store.dispatch(NotifyActions.HideNotify()), 3000);
  }

  if (!contactsForm) {
    return;
  }

  contactsForm.setAttribute('loading', data.isLoading.toString());
});

if (contactUsEl) {
  contactUsEl.addEventListener('form', (data: any) => {
    store.dispatch(NotifyActions.PendingNotify({
      data: data.detail,
      lang: 'en',
      url: 'mail/contacts',
    }));
  });
}

if (applyCourseEl) {
  applyCourseEl.addEventListener('form', (data: any) => {
    const lang = (window.location.href.split('/') as any).includes('ru') ? 'ru' : 'en';
    store.dispatch(NotifyActions.PendingNotify({
      data: data.detail,
      lang,
      url: 'mail/course',
    }));
  });
}
