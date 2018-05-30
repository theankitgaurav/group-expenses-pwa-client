<template>
  <v-list two-line>
    <template v-for="item in entries">
      <v-list-tile :key="item.category" avatar @click="openEntry(item._id)">
        <v-list-tile-content>
          <v-list-tile-title v-html="item.category"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.amount"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-divider :inset="true"/>
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
          this.entries = entriesFromServer.data.data;
          this.loading = false;
      } catch (err) {
          console.error("Failed loading items from server", err);
      }
    },
    async openEntry(entryId) {
      alert(entryId);
    }
  }
}
</script>
