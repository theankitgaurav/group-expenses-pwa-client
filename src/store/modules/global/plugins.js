import {GLOBAL_STORAGE_KEY} from '@/utils/data';

const localStoragePlugin = (store) => {
  store.subscribe((mutation, {global}) => {
    localStorage.setItem(GLOBAL_STORAGE_KEY, JSON.stringify(global));
  });
};

export default [localStoragePlugin];