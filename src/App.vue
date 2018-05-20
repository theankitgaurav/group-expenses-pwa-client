<template>
  <div id="app">
    <v-toolbar>
      <h3>Expenses</h3>
      <a v-if="!isLoggedIn" @click="login">Login</a>
      <a v-else @click="logout">Logout</a>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>


<script>
export default {
  name: 'app',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
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
