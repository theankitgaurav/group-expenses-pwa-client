<template>
  <v-list two-line>
    <template v-for="item in entries">
      <v-list-tile :key="item.category" avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="item.category"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.amount"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
    <v-progress-circular v-show="loading" :indeterminate="true"></v-progress-circular>
  </v-list>
</template>

<script>
import api from "@/services/api";
export default {
  data () {
      return {
          entries: [],
          loading: true
      };
  },
  async mounted() {
    this.refreshHome();
  },
  methods: {
    async refreshHome() {
      try {
          const entriesFromServer = await api.getEntries();
          this.entries = entriesFromServer.data.data;
          this.loading = false;
      } catch (err) {
          console.error("Failed loading items from server", err);
      }
    }
  }
}
</script>
