<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6>
        <v-card>
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
      const { username, password } = this;
      try {
        await this.$store.dispatch("authRequest", { username, password });
        this.$router.push('/home');
      } catch (err) {
        console.log(`Error during auth`, err);
        this.error = `Error during auth`;
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
