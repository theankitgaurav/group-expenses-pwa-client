<template>
  <div id="app">
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <v-toolbar>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <router-link headline @click.native="hideMenu" to="/" transition="slide-x-transition" class="header">Expenses</router-link>
          <span v-show="isLoggedIn">{{nameOfUser}}</span>
          <v-spacer></v-spacer>
          <a v-if="!isLoggedIn" @click="login">Login</a>
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
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    nameOfUser() {
      return this.$store.getters.nameOfUser;
    }
  },
  methods: {
    login() {
      this.$router.push('/login');
    },
    logout() {
      this.$store.dispatch("setIsLoggedIn", false);
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>
