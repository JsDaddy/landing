export const SHOW = '[Notify] SHOW';
export const HIDE = '[Notify] HIDE';
export const ERROR = '[Notify] ERROR';
export const PENDING = '[Notify] PENDING';

export function PendingNotify(payload: any) {
  return {
    payload,
    type: PENDING,
  };
}

export function ShowNotify(payload: any) {
  return {
    payload,
    type: SHOW,
  };
}

export function ErrorNotify(payload: any) {
  return {
    payload,
    type: ERROR,
  };
}

export function HideNotify() {
  return {
    type: HIDE,
  };
}
