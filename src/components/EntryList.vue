<template>
  <div>
    <md-list class="md-double-line" v-for="item in entries" :key="item.category">
      <md-list-item @click="openEntry(item._id)">
        <md-icon class="md-primary">phone</md-icon>
        <div class="md-list-item-text">
          <span>Rs. {{item.amount}} for {{item.category}}</span>
          <span>Paid by: {{item.forUser}} in {{item.group}}</span>
        </div>
      </md-list-item>
      <md-divider></md-divider>
    </md-list>
  </div>
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
  async mounted() {
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
</style>
