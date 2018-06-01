<template>
  <div class="page-container" id="app">
    <md-app>
      <md-app-toolbar class="md-primary" @click="goHome">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click.native="goBack" v-show="this.$store.state.backButtonRequired">
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
              <md-menu-item @click="logout">Logout</md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <md-tabs md-sync-route md-alignment="fixed" v-show="this.$store.state.enableNavigationTabs">
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
    }
  },
  watch: {
    '$route' (to, from) {
      // Toggle navigation tabs based on the routes
      if (to.name == 'home' || to.name == 'groups') {
        this.$store.commit("backButtonRequired", false);
        this.$store.commit("enableNavigationTabs", true);
      } else if (to.name == 'login' || to.name == 'register' || to.name == "index"){
        this.$store.commit("backButtonRequired", false);
      } else {
        this.$store.commit("backButtonRequired", true);
        this.$store.commit("enableNavigationTabs", false);
      }
      // Set title based on routes
      this.$store.commit("setTitle", to.meta.title);
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ?
        this.$router.go(-1) :
        this.$router.push('/')
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
    }
  }
}

</script>

<style scoped>

</style>
