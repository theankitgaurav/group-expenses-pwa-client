<template>
  <div>
    <EntryList/>
    <span class="fill-space"></span>
    <md-button @click="addExpense" class="md-fab md-primary md-fab-bottom-right ">
      <md-icon>add</md-icon>
    </md-button>
  </div>
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

<style>
.fill-space {
  /* // This fills the remaining space, by using flexbox.
  // Every toolbar row uses a flexbox row layout. */
  flex: 1 1 auto;
}
</style>
