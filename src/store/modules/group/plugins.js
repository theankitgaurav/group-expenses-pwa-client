import {GROUPS_STORAGE_KEY} from '@/utils/data';

const localStoragePlugin = store => {
  store.subscribe((mutation, { groups }) => {
    window.localStorage.setItem(GROUPS_STORAGE_KEY, JSON.stringify(groups));
  });
};

export default [localStoragePlugin];