// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/components/App'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store'
import { MdButton, MdContent, MdTabs, MdApp, MdAutocomplete, MdAvatar,
  MdDatepicker, MdDivider, MdElevation, MdEmptyState, MdField, MdIcon,
  MdImage, MdLayout, MdList, MdMenu, MdProgress, MdRipple, 
  MdSnackbar, MdSubheader, MdToolbar, MdCard, MdDialog} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdApp);
Vue.use(MdAutocomplete);
Vue.use(MdAvatar);
Vue.use(MdDatepicker);
Vue.use(MdDivider);
Vue.use(MdElevation);
Vue.use(MdEmptyState);
Vue.use(MdField);
Vue.use(MdIcon);
Vue.use(MdImage);
Vue.use(MdLayout);
Vue.use(MdList);
Vue.use(MdMenu);
Vue.use(MdProgress);
Vue.use(MdRipple);
Vue.use(MdSnackbar);
Vue.use(MdSubheader);
Vue.use(MdToolbar);
Vue.use(MdCard);
Vue.use(MdDialog);

Vue.config.productionTip = false;
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
