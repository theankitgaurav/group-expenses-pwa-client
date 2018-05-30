<template>
  <v-list two-line>
    <template v-for="item in entries">
      <v-list-tile class="v-list-tile" :key="item.category" @click="openEntry(item._id)" ripple>
        <v-list-tile-content>
          <v-list-tile-title v-html="'Rs. ' + item.amount + ' for ' + item.category"></v-list-tile-title>
          <v-list-tile-sub-title v-html="'Paid by: ' + item.forUser + ' in ' + item.group"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
    <v-progress-circular v-show="loading" :indeterminate="true"></v-progress-circular>
  </v-list>
</template>

<script>
import entryService from "@/services/entryService";
export default {
  data () {
      return {
          entries: [],
          loading: true
      };
  },
  async created() {
    this.refreshHome();
  },
  methods: {
    async refreshHome() {
      try {
          const entriesFromServer = await entryService.getEntries();
          this.entries = entriesFromServer.response.data;
          this.loading = false;
      } catch (err) {
          console.error("Failed loading items from server", err);
      }
    },
    async openEntry(entryId) {
      console.log(entryId);
    }
  }
}
</script>

<style scoped>
.v-list-tile {
  border-bottom: 1px solid lightblue;
}
</style>
