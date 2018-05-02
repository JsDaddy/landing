import '../action/notify.dart';

Map<String, dynamic> notifyReducer(Map<String, dynamic> state, action) {
  print('REDUCER $action');
  switch (action.type) {
    case SHOW: {
      return {'isOpen': true, 'message': action.payload.toString(), 'isLoading': false };
    }

    case HIDE: {
      return {'isOpen': false, 'message': 'D', 'isLoading': false };
    }

    case PENDING: {
      return {'isOpen': false, 'message': 'D', 'isLoading': true };
    }

    case ERROR: {
      return {'isOpen': true, 'message': action.payload.toString(), 'isLoading': false };
    }
  }
  return state;
}
