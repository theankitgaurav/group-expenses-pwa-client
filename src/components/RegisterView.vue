<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="register">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="name">Name</label>
                <md-input v-model="name" type="text" name="name" required :disabled="sending" />
              </md-field>
              <md-field>
                <label for="email">Email</label>
                <md-input v-model="email" type="text" name="email" required :disabled="sending" />
              </md-field>
              <md-field>
                <label for="password">Password</label>
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
import {secure} from '@/api';
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: false,
      errorMsg: null,
      sending: false
    }
  },
  methods: {
    register() {
      this.sending = true;
      const {name, email, password} = this;
      this.$store.dispatch("register", {name, email, password})
      .then((res) => {
        this.$router.push('/home');
      })
      .catch((err) => {
        this.sending = false;
        console.error('Error while trying to register: ', err);
        // this.$store.dispatch("authLogout");
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
