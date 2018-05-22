<template>
  <div id="app">
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <v-toolbar>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <router-link headline @click.native="hideMenu" to="/" transition="slide-x-transition" class="header">Expenses</router-link>
          <v-spacer></v-spacer>
          <a v-if="!this.$store.getters.isAuthenticated" @click="login">Login</a>
          <a v-else @click="logout">Logout</a>
        </v-toolbar>
        <main>
          <router-view></router-view>
        </main>
        <footer></footer>
      </v-flex>
    </v-layout>
  </div>
</template>




<script>
export default {
  name: 'app',
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

</style>
