<template>
  <md-card class="md-layout-item md-size-50 md-small-size-100">
    <md-card-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
            <md-icon class="md-primary">phone</md-icon>
            <span>Spent ₹: {{expense.amount}} by {{expense.paidBy}}</span><br/>
            <span>For {{expense.category}} on {{getFormattedDate(expense.paidOn)}}</span>
        </div>
      </div>
    </md-card-content>
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

</style>
