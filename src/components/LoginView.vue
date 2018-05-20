<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6>
        <v-card>
          <v-toolbar color="primary">Login</v-toolbar>
          <v-form>
            <v-text-field v-model="username" type="text" name="username" placeholder="username" required />
            <v-text-field v-model="password" type="password" name="password" placeholder="password" />
            <v-btn round @click="login">Login</v-btn>
            <div v-html="error" class="error" />
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import authenticateService from "@/services/authenticateService";
export default {
  data() {
    return {
      username: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const res = await authenticateService.login({
          username: this.username,
          password: this.password
        });
        console.log(`Response from server: `, res);
        this.$store.dispatch("setToken", res.data.token);
        this.$store.dispatch("setUser", res.data.user);
        this.$router.push("/home");
      } catch (err) {
        this.error = err.response;
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
