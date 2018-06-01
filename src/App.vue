<template>
  <div class="page-container" id="app">
    <md-app>
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
                Hi, {{username}}
              </md-menu-item>
              <md-divider/>
              <md-menu-item @click="logout">Logout</md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <md-tabs md-sync-route md-alignment="fixed" v-show="this.$store.state.appConfig.enableNavigationTabs">
          <md-tab id="tab-home" md-label="All" to="home" />
          <md-tab id="tab-pages" md-label="Groups" to="groups" />
        </md-tabs>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template> 

<script>
export default {
  name: 'app',
  data() {
    return {
    };
  },
  computed: {
    title() {
      return this.$store.state.title
    },
    username () {
      return this.$store.state.user ? this.$store.state.user.username: ""; 
    }
  },
  watch: {
    '$route' (to, from) {
      this.toggleBackButton(to);
      this.toggleBackButton(to);
      // Set title based on routes
      this.$store.commit("setTitle", to.meta.title);
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ?
        this.$router.go(-1) :
        this.$router.push('/home')
    },
    goHome() {
      this.$router.replace('/home');
    },
    login() {
      this.$router.push('/login');
    },
    async logout() {
      await this.$store.dispatch("authLogout");
      this.$router.push('/');
    },
    toggleBackButton (route) {
      const routeName = route.name;
      if (['index', 'login', 'register', 'home', 'groups'].indexOf(routeName) != -1) {
        this.$store.commit("backButtonRequired", false);
      } else {
        this.$store.commit("backButtonRequired", true);
      }
    },
    toggleNavigationTabs (route) {
      const routeName = route.name;
      if (['home', 'groups'].indexOf(routeName) != -1) {
        this.$store.commit("enableNavigationTabs", true);
      } else {
        this.$store.commit("enableNavigationTabs", false);
      }
    }
  }
}

</script>

<style scoped>

</style>
