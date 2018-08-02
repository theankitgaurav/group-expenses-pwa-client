import { GLOBAL_STORAGE_KEY } from '@/store/modules/global';
import { EXPENSES_STORAGE_KEY } from '@/store/modules/expenses';
import { GROUPS_STORAGE_KEY } from '@/store/modules/groups';

const localStoragePlugin = store => {
  store.subscribe((mutation, { global }) => {
    window.localStorage.setItem(GLOBAL_STORAGE_KEY, JSON.stringify(global));
  });
  store.subscribe((mutation, { expenses }) => {
    window.localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(expenses));
  });
  store.subscribe((mutation, { groups }) => {
    window.localStorage.setItem(GROUPS_STORAGE_KEY, JSON.stringify(groups));
  });
};

export default [localStoragePlugin];