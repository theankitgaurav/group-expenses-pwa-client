const localStoragePlugin = store => {
  store.subscribe((mutation, { token, user, entriesList}) => {
    if (mutation.type === 'AUTH_SUCCESS') {
      window.localStorage.setItem('token', JSON.stringify(token));
      window.localStorage.setItem('user', JSON.stringify(user));
    } else if (mutation.type === 'SET_EXPENSES') {
      window.localStorage.setItem('entriesList', JSON.stringify(entriesList));
    } else if (mutation.type === 'AUTH_LOGOUT') {
      window.localStorage.clear();
    }
  });
};

export default [localStoragePlugin];