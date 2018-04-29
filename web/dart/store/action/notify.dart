const String SHOW = '[Notify] SHOW';
const String HIDE = '[Notify] HIDE';
const String ERROR = '[Notify] ERROR';
const String PENDING = '[Notify] PENDING';

class PendingNotify {
  String type = PENDING;
  Map payload;

  PendingNotify(this.payload) {}
}

class ShowNotify {
  String type = SHOW;
  String payload;

  ShowNotify(this.payload) {}
}

class ErrorNotify {
  String type = ERROR;
  String payload;

  ErrorNotify(this.payload) {}
}

class HideNotify {
  String type = HIDE;
}
