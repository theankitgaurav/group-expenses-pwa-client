<template>
  <v-layout row>
    <v-flex md6 offset-md3>
      <v-toolbar>
        <strong>New Entry</strong>
        <v-spacer></v-spacer>
        <v-btn @click="saveEntry">Save</v-btn>
      </v-toolbar>
      <v-form>
        <div v-html="error" class="error" />
        <v-text-field v-model="category" label="Category" required></v-text-field>
        <v-text-field v-model="amount" label="Amount" type="number" required></v-text-field>
        <!-- <v-text-field v-model="forUser" placeholder="Expense By"></v-text-field> -->
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import api from '@/services/api';
export default {
  data() {
    return {
      category: "",
      amount: "",
      forUser: "",
      error: null
    }
  },
  methods: {
    async saveEntry() {
      const newPost = {
        category: this.category,
        amount: this.amount
      };
      try {
        const res = await api.saveEntry(newPost);
        console.log(`New post saved: `, res);
      } catch (err) {
        this.error = err.response.data;
        console.log('Error saving new post: ', err);
      }
    }
  }
}

</script>

<style>
.error {
  color: red;
}
</style>
