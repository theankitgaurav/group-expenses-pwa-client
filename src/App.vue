<template>
  <div class="page-container" id="app">
    <md-app>
      <md-app-toolbar class="md-primary" @click="goHome">
        <span class="md-title">{{title}}</span>
        <span>
          <a v-if="!this.$store.getters.isAuthenticated" @click="login">Login</a>
          <a v-else @click="logout">Logout</a>
        </span>
      </md-app-toolbar>
      <md-app-content>
        <main>
          <router-view></router-view>
        </main>
      </md-app-content>
    </md-app>
  </div>
</template>







<script>
export default {
  name: 'app',
  computed: {
    title () {
      return this.$store.state.title
    }
  },
  watch: {
    '$route' (to, from) {
      this.$store.commit("setTitle", to.meta.title);
    }
  },
  methods: {
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

<style>
/* @media only screen and (max-width: 599px) */
.container {
    padding: 0px;
}
</style>
