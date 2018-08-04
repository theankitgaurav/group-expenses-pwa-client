<template>
  <div class="home-tab">
    <md-content v-if="expenses.length">
      <md-list class="md-double-line" v-for="expense in expenses" :key="expense.id">
        <ExpenseListItem :expense="expense" @open="open"/>
        <md-divider/>
      </md-list>
      <md-button @click="addExpense" class="md-fab md-primary ">
        <md-icon>add</md-icon>
      </md-button>
    </md-content>
    <md-content v-else>
      <md-empty-state md-icon="credit_card" md-label="No expenses" 
        md-description="By default, expenses will be saved as your personal ones.">
        <md-button class="md-primary md-raised" @click="addExpense">Add an expense</md-button>
      </md-empty-state>
    </md-content>
  </div>
</template>

<script>
import ExpenseListItem from './ExpenseListItem.vue'
export default {
  components: {ExpenseListItem},
  async mounted () {
    this.refreshHome();
  },
  computed: {
    expenses () {
      return this.$store.state.entriesList;
    }
  },
  methods: {
    addExpense () {
      this.$router.push("/new-expense");
    },
    refreshHome() {
      this.$store.dispatch('setEntriesList');
    },
    open (expenseId) {
      this.$router.push('/expense/' + expenseId);
    }
  }
};
</script> 

<style>
.md-list {
  padding: 0px;
}
.md-fab {
  position: absolute;
  bottom: 0px;
  right: 0px;
}
</style>
