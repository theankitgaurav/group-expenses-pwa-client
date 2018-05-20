<template>
  <v-card>
    <v-card-text style="height: 300px;" class="grey lighten-5">
      <v-progress-circular v-show="loading" indeterminate color="primary"></v-progress-circular>
      <EntryList>
      </EntryList>
    </v-card-text>
    <v-card-text style="height: 100px; position: relative">
      <v-btn @click="addExpense" absolute dark fab top right color="pink">
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
  method: {
    addExpense () {
        this.$router.push("/new-entry");
    }
  }
};
</script>
