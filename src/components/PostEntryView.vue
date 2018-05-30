<template>
  <transition name="bounce">
    <v-layout row style="padding: 16px;">
      <v-flex md6 offset-md3>
        <v-form>
          <v-text-field v-model="category" label="Category" required></v-text-field>
          <v-text-field v-model="amount" label="Amount" type="number" required></v-text-field>
          <!-- <v-text-field v-model="forUser" placeholder="Expense By"></v-text-field> -->
          <Snackbar v-if="message" v-bind:message="message">{{message}}</Snackbar>
        </v-form>
        <v-card-text style="height: 50px; position: relative">
          <v-btn @click.native="saveEntry" absolute dark fab top right color="blue">
            <v-icon>done</v-icon>
          </v-btn>
        </v-card-text>
      </v-flex>
    </v-layout>
  </transition>
</template>


<script>
import Snackbar from '@/components/Snackbar.vue';
import entryService from '@/services/entryService';
export default {
  data() {
    return {
      category: "",
      amount: "",
      forUser: "",
      message: null
    }
  },
  components: {
    Snackbar
  },
  methods: {
    async saveEntry() {
      const newPost = {
        category: this.category,
        amount: this.amount
      };
      entryService.saveEntry(newPost)
        .then((res) => {
          this.message = `New post saved: `, res;
          this.$router.push('/home');
        })
        .catch((err) => {
          console.log('Error saving new post: ', err);
          this.message = err.response.data;
        });
    }
  }
}


</script>

<style>
.error {
  color: red;
}
.bounce-enter-active {
  animation: bounce-in .05s;
}
.bounce-leave-active {
  animation: bounce-in .1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(.25);
  }
  50% {
    transform: scale(.5);
  }
  75% {
    transform: scale(.75);
  }
  100% {
    transform: scale(1);
  }
}
</style>
