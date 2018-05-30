<template>
  <v-card>
    <v-card-text style="height: 300px;padding:0px;" class="grey lighten-5">
      <EntryList/>
    </v-card-text>
    <v-card-text style="height: 50px; position: relative">
      <v-btn @click="addExpense" absolute dark fab top right color="blue">
        <v-icon>add</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>


<script>
import EntryList from '@/components/EntryList.vue';
export default {
  components: {
      EntryList
  },
  methods: {
    addExpense () {
        this.$router.push("/new-entry");
    }
  }
};
</script>
