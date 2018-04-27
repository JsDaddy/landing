const String SHOW = '[Notify] Show';
const String HIDE = '[Notify] Hide';


class ShowNotify {
  String type = SHOW;
  String payload;

  ShowNotify(this.payload){}
}



class HideNotify {
  String type = HIDE;
  HideNotify(){}
}