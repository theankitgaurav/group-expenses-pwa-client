import constants from '@/utils/constants';

const localStoragePlugin = store => {
  store.subscribe((mutation, { token, user, entriesList}) => {
    if (mutation.type === 'AUTH_SUCCESS') {
      window.localStorage.setItem(constants.TOKEN, JSON.stringify(token));
      window.localStorage.setItem(constants.USER, JSON.stringify(user));
    } else if (mutation.type === 'SET_EXPENSES') {
      window.localStorage.setItem(constants.EXPENSES, JSON.stringify(entriesList));
    } else if (mutation.type === 'AUTH_LOGOUT') {
      window.localStorage.clear();
    }
  });
};

export default [localStoragePlugin];