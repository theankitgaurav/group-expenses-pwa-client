<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="register">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="username">Username/Email</label>
                <md-input v-model="username" type="text" name="username" required :disabled="sending" />
              </md-field>
              <md-field>
                <label for="username">Password</label>
                <md-input v-model="password" type="password" name="password" required :disabled="sending" />
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending"></md-progress-bar>
        <md-card-actions>
          <md-button to="login" :disabled="sending">Login</md-button>
          <md-button type="submit" class="md-primary md-raised" :disabled="sending">Register</md-button>
        </md-card-actions>
      </md-card>
      <md-snackbar md-position="center" :md-active.sync="error" class="error">{{errorMsg}}</md-snackbar>
    </form>
  </div>
</template>


<script>
import authenticateService from '@/services/authenticateService';
export default {
  data() {
    return {
      username: "",
      password: "",
      error: false,
      errorMsg: null,
      sending: false
    }
  },
  methods: {
    register() {
      this.sending = true;
      authenticateService.register({
          username: this.username,
          password: this.password
        })
        .then((res) => {
          console.log(`Response from server: `, res);
          this.$router.push('/home');
        })
        .catch((err) => {
          this.sending = false;
          console.log(`Error during auth`, err);
          this.error = true;
          this.errorMsg = `Error during login. Try again.`;
        });
    }
  }
};

</script>

<style scoped>
.error {
  color: red;
}
</style>
