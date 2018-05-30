<template>
  <div id="app">
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <v-toolbar>
          <v-toolbar-title @click="goHome" >{{title}}</v-toolbar-title>
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
  data () {
    return {
      title: this.$store.state.title
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

</style>
