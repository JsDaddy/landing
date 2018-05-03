import 'dart:html';
import 'dart:async';
import 'dart:convert';
import 'package:redux_epics/redux_epics.dart';
import '../../config.dart';
import '../action/notify.dart';

Stream<dynamic> notifyEpic(
    Stream<dynamic> actions, EpicStore<Map<String, dynamic>> store) {
  return actions
    .where((action) => action is PendingNotify).asyncMap((action) =>
      HttpRequest
          .postFormData('$BASE_URL/${action.payload['url']}', action.payload['data'], requestHeaders: {'Content-Language': '${action.payload['lang']}'} )
          .then((req) => json.decode(req.responseText))
          .then((data) => new ShowNotify(data['message']))
          .catchError((error) => new ErrorNotify(error)));
}
