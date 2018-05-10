export const SHOW = '[Notify] SHOW';
export const HIDE = '[Notify] HIDE';
export const ERROR = '[Notify] ERROR';
export const PENDING = '[Notify] PENDING';

export class PendingNotify {
  public readonly type = PENDING;
  public constructor(public payload: any) {}
}

// tslint:disable-next-line
export class ShowNotify {
  public readonly type = SHOW;
  public constructor(public payload: any) {}
}

// tslint:disable-next-line
export class ErrorNotify {
  public readonly type = ERROR;
  public constructor(public payload: any) {}
}

// tslint:disable-next-line
export class HideNotify {
  public readonly type = HIDE;
}
