<template>
  <div>
      <h1>Login</h1>
      <input v-model="username" type="text" name="username" placeholder="username"/><br>
      <input v-model="password" type="password" name="password" placeholder="password"/><br>
      <button @click="login">Login</button>
      <div v-html="error" class="error" />
  </div>
</template>

<script>
import authenticateService from '@/services/authenticateService';
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const res = await authenticateService.login({
          username: this.username,
          password: this.password
        });
        console.log(`Response from server: `, res);
        this.$store.dispatch('setToken', res.data.token);
      } catch (err) {
        this.error = err.response
        console.log(err)
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
