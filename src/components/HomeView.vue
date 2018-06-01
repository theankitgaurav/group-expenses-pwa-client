<template>
  <div>
    <md-content v-if="this.$store.state.entriesList.length > 0">
      <EntryList/>
      <md-button @click="addExpense" class="md-fab md-primary md-fab-bottom-right ">
        <md-icon>add</md-icon>
      </md-button>
    </md-content>
    <md-content v-else>
      <md-empty-state 
      md-icon="credit_card" 
      md-label="No expenses" 
      md-description="By default, expenses will be saved as your personal ones."
      >
        <md-button class="md-primary md-raised" @click="addExpense">Add an expense</md-button>
      </md-empty-state>
    </md-content>
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

</style>
