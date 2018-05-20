<template>
    <div> 
        Welcome home, {{nameOfUser}}
        <ul>
            <li v-for="entry in entries" :key="entry.id">
                {{entry.category}}: {{entry.amount}}
            </li>
        </ul>
    </div>
</template>

<script>
import api from "@/services/api";
export default {
  data () {
      return {
          entries: []
      };
  },
  computed: {
    nameOfUser() {
      return this.$store.getters.nameOfUser;
    }
  },
  async created() {
    this.refreshHome();
  },
  methods: {
    async refreshHome() {
      this.loading = true;
      try {
          const entriesFromServer = await api.getEntries();
          this.entries = entriesFromServer.data.data;
          this.loading = false;
      } catch (err) {
          console.error(err);
      }
    }
  }
};
</script>
