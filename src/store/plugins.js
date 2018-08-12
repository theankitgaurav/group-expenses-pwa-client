import data from '@/utils/data';

const localStoragePlugin = store => {
  store.subscribe((mutation, { token, user, entriesList}) => {
    if (mutation.type === 'authSuccess') {
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('user', JSON.stringify(user));
    } else if (mutation.type === 'setEntriesList') {
      window.localStorage.setItem('entriesList', JSON.stringify(entriesList));
    } else if (mutation.type === 'authLogout') {
      window.localStorage.clear();
    }
  });
};

export default [localStoragePlugin];