import * as NotifyActions from '../actions/notify.actions';

const initialState = {
  isLoading: false,
  isOpen: false,
  message: '',
};

export function notify(state = initialState, action: any) {
  switch (action.type) {
    case NotifyActions.SHOW: {
      return { isOpen: true, message: action.payload.toString(), isLoading: false };
    }

    case NotifyActions.HIDE: {
      return { ...state, isOpen: false, isLoading: false };
    }

    case NotifyActions.PENDING: {
      return { ...state, isOpen: false, isLoading: true };
    }

    case NotifyActions.ERROR: {
      return { isOpen: true, message: action.payload.toString(), isLoading: false };
    }

    default: {
      return state;
    }
  }
}
