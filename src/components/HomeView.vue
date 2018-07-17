<template>
  <div>
    <md-content v-if="entries.length > 0">
      <md-list class="md-double-line" v-for="item in entries" :key="item.id">
        <md-list-item @click="openEntry(item.id)">
          <md-icon class="md-primary">phone</md-icon>
          <div class="md-list-item-text">
            <span>Rs. {{item.amount}} for {{item.category}}</span>
            <span>Paid by: {{item.paidBy}} in {{item.groupName}}</span>
          </div>
        </md-list-item>
        <md-divider></md-divider>
      </md-list>
      <md-button @click="addExpense" class="md-fab md-primary md-fab-bottom-right ">
        <md-icon>add</md-icon>
      </md-button>
    </md-content>
    <md-content v-else>
      <md-empty-state md-icon="credit_card" md-label="No expenses" md-description="By default, expenses will be saved as your personal ones.">
        <md-button class="md-primary md-raised" @click="addExpense">Add an expense</md-button>
      </md-empty-state>
    </md-content>
  </div>
</template>




<script>
import * as _ from 'lodash';
export default {
  data () {
      return {
          loading: true
      };
  },
  async mounted () {
    this.refreshHome();
  },
  computed: {
    entries () {
      return this.$store.state.entriesList
    }
  },
  methods: {
    addExpense () {
        this.$router.push("/new-entry");
    },
    refreshHome() {
      const self = this;
      this.$store.dispatch('setEntriesList')
        .then((res)=>{
          console.log('Result of dispatching setEntriesList action', res);
        })
        .catch((err)=>{
          console.error('Dispatching setEntriesList action gave error: ', err);
        })
    },
    async openEntry(entryId) {
      alert(JSON.stringify(_.find(this.entries, {id: entryId})));
    }
  }
};
</script>

<style>

</style>
