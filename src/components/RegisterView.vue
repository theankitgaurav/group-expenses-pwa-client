<template>
  <div>
      <h1>Register</h1>
      <input v-model="username" type="text" name="username" placeholder="username"/><br>
      <input v-model="password" type="password" name="password" placeholder="password"/><br>
      <button @click="register">Register</button>
  </div>
</template>

<script>
import authenticateService from '@/services/authenticateService';
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const res = await authenticateService.register({
        username: this.username,
        password: this.password
      });
      console.log(`Response from server: `, res);
    }
  }
};
</script>

<style scoped>

</style>
