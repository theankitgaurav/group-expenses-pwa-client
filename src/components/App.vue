<template>
  <div class="page-container" id="app">
    <md-app v-on:update:errorMessage="errorMessage = $event">
      <md-app-toolbar class="md-primary" @click="goHome">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click.native="goBack" v-show="this.$store.state.appConfig.backButtonRequired">
            <md-icon>arrow_back</md-icon>
          </md-button>
          <md-button class="md-title">{{title}}</md-button>
        </div>
        <div class="md-toolbar-section-end" v-show="this.$store.getters.isAuthenticated">
          <md-menu md-direction="bottom-start">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>more_vert</md-icon>
            </md-button>
            <md-menu-content>
              <md-menu-item>
                Hi, there
              </md-menu-item>
              <md-divider/>
              <md-menu-item @click="logout">Logout</md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <md-tabs md-sync-route md-alignment="fixed" 
        md-active-tab="tab-home" 
        v-show="this.$store.state.appConfig.enableNavigationTabs">
          <md-tab id="tab-home" md-label="All Expenses" to="home" />
          <md-tab id="tab-groups" md-label="Groups" to="groups" />
        </md-tabs>
        <router-view></router-view>
        <md-snackbar md-position="center" :md-active.sync="showError" class="error">{{errorMessage}}</md-snackbar>
      </md-app-content>
    </md-app>
  </div>
</template> 

<script>
export default {
  name: 'app',
  data() {
    return {
      showError: this.$store.state.showError,
      errorMessage: this.$store.state.errorMessage
    };
  },
  computed: {
    title () {
      return this.$store.state.title
    }
  },
  watch: {
    '$route' (to, from) {
      this.toggleBackButton(to);
      this.toggleNavigationTabs(to);
      // Set title based on routes
      this.$store.commit("setTitle", to.meta.title);
    }
  },
  methods: {
    goBack() {
      this.$router.push('/home');
    },
    goHome() {
      this.$router.replace('/home');
    },
    login() {
      this.$router.push('/login');
    },
    async logout() {
      await this.$store.dispatch("AUTH_LOGOUT");
      this.$router.push('/');
    },
    toggleBackButton(route) {
      const routeName = route.name;
      this.$store.commit("backButtonRequired", this.isBackButtonRequired(routeName));
    },
    isBackButtonRequired(routeName) {
      const arrayOfViewsWithoutBackButton = ['index', 'login', 'register', 'home', 'groups'];
      return !arrayOfViewsWithoutBackButton.includes(routeName);
    },
    toggleNavigationTabs(route) {
      const routeName = route.name;
      this.$store.commit("enableNavigationTabs", this.isNavigationTabRequired(routeName));
    },
    isNavigationTabRequired(routeName) {
      const arrayOfViewsWithoutNavTabs = ['home', 'groups'];
      return arrayOfViewsWithoutNavTabs.includes(routeName);
    }
  }
}
</script>

<style scoped>
.md-content {
  padding: 0px;
}
</style>
