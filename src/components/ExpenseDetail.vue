<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">₹ {{expense.amount}} for {{expense.category}} in {{expense.groupName}} group</div>
        <div class="md-subhead">Paid by {{expense.paidBy}} on {{expense.paidOn | formatDate}}</div>
      </md-card-header-text>
    </md-card-header>

    <md-card-content>
      {{expense.details}}
    </md-card-content>

    <md-card-actions md-alignment="left">
      <md-button @click="deleteExpense()">Delete</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import _ from 'lodash';
import utils from '@/utils';
import {secure} from '@/api';

export default {
  data() {
    return {
      expense: this.getExpense()
    }
  },
  methods: {
    getExpense() {
        try {
            const expenseId = Number(this.$store.state.route.params.id);
            const expense = _.find(this.$store.state.entriesList, {id: expenseId});
            if (!expense) throw new Error('No matching expense found');
            return expense;
        } catch (err) {
            this.$store.dispatch('showSnack', err)
            this.$router.push('/home');
        }
    },
    async deleteExpense () {
      const expenseId = this.expense.id;
      try {
        const response = await secure.deleteExpense(expenseId);
        if (response.Status !== 200) {
          throw new Error(JOSN.stringify(response));
        }
        this.$router.push("/home");
      } catch (err) {
        this.$store.dispatch('showSnack', err)
      }
    }
  },
  filters: {
    formatDate: utils.getFormattedDate
  }
}
</script>

<style scoped>
.md-card {
  margin: 0;
}
</style>
