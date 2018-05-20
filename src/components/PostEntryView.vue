<template>
  <v-layout row>
    <v-flex md6 offset-md3>
      <v-toolbar>
        <strong>New Entry</strong>
        <v-spacer></v-spacer>
        <v-btn @click="saveEntry">Save</v-btn>
      </v-toolbar>
      <v-form>
        <v-text-field v-model="category" name="category" placeholder="Category"></v-text-field>
        <v-text-field v-model="amount" type="number" placeholder="Amount"></v-text-field>
        <!-- <v-text-field v-model="forUser" placeholder="Expense By"></v-text-field> -->
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data () {
        return {
            category: "",
            amount: "",
            forUser: ""
        }
    },
    methods: {
        saveEntry () {
            console.log(this.$data)
        }
    }
}
</script>
