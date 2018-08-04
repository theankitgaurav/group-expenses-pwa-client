<template>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <form novalidate @submit.prevent="saveEntry">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-33">
              <md-field>
                <md-icon>perm_identity</md-icon>
                <label>Paid By</label>
                <md-input v-model="form.expenseBy" />
              </md-field>
            </div>
            <div class="md-layout-item md-size-33">
              <md-datepicker v-model="form.expenseOn" md-immediately>
                <label>Paid On</label>
              </md-datepicker>
            </div>
            <div class="md-layout-item md-size-33">
              <md-field>
                <md-icon>group</md-icon>
                <label>Group</label>
                <md-select v-for="group in groups" :key="group.id" v-model="form.expenseGroup" name="group" id="group">
                  <md-option :value="group.id">{{group.name}}</md-option>
                </md-select>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Details</label>
                <md-textarea v-model="form.expenseDetails"></md-textarea>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-33">
              <md-field>
                <label>Amount</label>
                <span class="md-prefix">₹</span>
                <md-input v-model="form.expenseAmount" type="number"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-33">
              <md-autocomplete v-model="form.expenseCategory" :md-options="categoryList">
                <label>Category</label>
              </md-autocomplete>
            </div>
          </div>
      </form>
      <md-button @click="saveEntry" class="md-fab md-primary md-fab-bottom-right ">
        <md-icon>done</md-icon>
      </md-button>
      <md-snackbar md-position="center" :md-active.sync="error" class="error">{{errorMsg}}</md-snackbar>
    </md-card>
</template>

<script>
import {secure} from '@/api';
export default {
  data() {
    return {
      groups: [{id:26, name: 'Personal'}, {id: 2, name: 'hhdi'}],
      form: {
        expenseCategory: "",
        expenseAmount: "",
        expenseBy: "",
        expenseOn: null,
        expenseGroup: "",
        expenseDetails: ""
      },
      error: false,
      errorMsg: null,
      groupMemberList: ['Manish', 'Surit', 'Ankit'],
      categoryList: ['Veggies', 'Flour', 'Rice', 'Stationary', 'Detergent']
    }
  },
  methods: {
    async saveEntry() {
      this.validateExpense();
      secure.saveEntry(this.form)
        .then((res) => {
          console.log("New post saved", res);
          console.log('Form: ', this.form);
          this.message = `New post saved: `, res;
          this.$router.push('/home');
        })
        .catch((err) => {
          console.log('Error saving new post: ', err);
          this.error = true;
          this.errorMsg = err.response.data;
        });
    },
    validateExpense () {
      if(!this.form.expenseCategory) this.form.expenseCategory = 'Others';
      if(!this.form.expenseAmount) this.form.expenseAmount = 10;
      if(!this.form.expenseBy) this.form.expenseBy = this.$store.state.user.id;
      if(!this.form.expenseOn) this.form.expenseOn = new Date;
      if(!this.form.expenseGroup) this.form.expenseGroup = 'Personal';
    }
  }
}


</script>

<style <style scoped>
.error {
  color: red;
}
.md-card {
  padding: 0px 10px;
}
</style>