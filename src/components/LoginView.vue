<template>
<div>
  <form novalidate class="md-layout" @submit.prevent="login">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="username">Username/Email</label>
              <md-input v-focus v-model="username" type="text" name="username" required :disabled="sending"/>
            </md-field>
            <md-field>
              <label for="username">Password</label>
              <md-input v-model="password" type="password" name="password" required :disabled="sending"/>
            </md-field>
          </div>
        </div>
      </md-card-content>
      <md-progress-bar md-mode="indeterminate" v-if="sending"></md-progress-bar>
      <md-card-actions>
        <md-button to="register" :disabled="sending">Register</md-button>
        <md-button type="submit" class="md-primary md-raised" :disabled="sending" >Login</md-button>
      </md-card-actions>
    </md-card>
    <md-snackbar md-position="center" :md-active.sync="error" class="error">{{errorMsg}}</md-snackbar>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error: false,
      errorMsg: null,
      sending: false
    };
  },
  directives: {
    focus: {
      // When the bound element is inserted into the DOM...
      inserted: function (el) {
        // Focus the element
        el.focus()
      }
    }
  },
  methods: {
    login() {
      const self = this;
      self.sending = true;
      const { username, password } = self;
      self.$store.dispatch("authRequest", { username, password })
      .then(function (res) {
        self.$router.push('/home');
      })
      .catch (function (err) {
        self.sending = false;
        console.log(`Error during auth`, err);
        self.error = true;
        self.errorMsg = `Error during login. Try again.`;
      })
    }
  }
};

</script>

<style scoped>
.error {
  color: red;
}
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
