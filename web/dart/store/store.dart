import 'package:redux/redux.dart';
import 'reducer/notify.dart';

final store = new Store<Map<String, dynamic>>(notifyReducer,
    initialState: {'isOpen': false, 'message': ''});
