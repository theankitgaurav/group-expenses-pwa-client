import {EXPENSES_STORAGE_KEY} from '@/utils/data';

const localStoragePlugin = store => {
  store.subscribe((mutation, { expenses }) => {
    window.localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(expenses));
  });
};

export default [localStoragePlugin];