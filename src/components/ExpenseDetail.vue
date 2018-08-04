<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">₹: {{expense.amount}} for {{expense.category}}</div>
        <div class="md-subhead">Paid by {{expense.paidBy}} on {{getFormattedDate(expense.paidOn)}}</div>
      </md-card-header-text>
    </md-card-header>

    <md-card-content>
      {{expense.details}}
    </md-card-content>

    <md-card-actions md-alignment="left">
      <md-button>Delete</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import _ from 'lodash';
import utils from '@/utils';

export default {
  data() {
    return {
      expense: this.getExpense()
    }
  },
  methods: {
    getFormattedDate: utils.getFormattedDate,
    getExpense() {
        try {
            const expenseId = Number(this.$store.state.route.params.id);
            const expense = _.find(this.$store.state.entriesList, {id: expenseId});
            if (!expense) throw new Error('No matching expense found');
            return expense;
        } catch (err) {
            console.error(err);
            this.$router.push('/home');
        }

    }
  }
}
</script>

<style scoped>
.md-card {
  margin: 0;
}
</style>
