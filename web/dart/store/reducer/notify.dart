import '../action/notify.dart';

Map<String, dynamic> notifyReducer(Map<String, dynamic> state, action) {
  if (action.type == SHOW) {
    return {'isOpen': true, 'message': action.payload};
  } else if (action.type == HIDE) {
    return {'isOpen': false, 'message': ''};
  }
  return state;
}
