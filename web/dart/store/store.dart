import 'package:redux/redux.dart';
import 'package:redux_epics/redux_epics.dart';
import 'reducer/notify.dart';
import 'epics/notify.dart';

var epicMiddleware = new EpicMiddleware(notifyEpic);
final store = new Store<Map<String, dynamic>>(notifyReducer,
    initialState: {'isOpen': false, 'message': ''},
    middleware: [epicMiddleware]);
