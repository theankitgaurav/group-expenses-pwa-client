<template>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <form novalidate @submit.prevent="saveEntry">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-33">
              <md-field>
                <md-icon>group</md-icon>
                <label>Group</label>
                <md-select v-model="form.expenseGroup" name="group" id="group"
                    v-model.lazy="groupSelection">
                  <md-option v-for="group in groups" 
                    :key="group.id" 
                    :value="group.id">{{group.name}}</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-size-33">
              <md-field>
                <md-icon>perm_identity</md-icon>
                <label>Paid By</label>
                <md-select v-model="form.expenseBy" name="paidBy" id="paidBy">
                  <md-option v-for="paidBy in groupMemberList" :key="paidBy.id" :value="paidBy.id">{{paidBy.name}}</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-size-33">
              <md-datepicker v-model="form.expenseOn" md-immediately>
                <label>Paid On</label>
              </md-datepicker>
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
              <md-autocomplete v-model="form.category" :md-options="categoriesList">
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
      groupSelection: null,
      groups: [], // Shape: [{id,name}]
      form: {
        category: "",
        expenseAmount: "",
        expenseBy: "",
        expenseOn: null,
        expenseGroup: "",
        expenseDetails: ""
      },
      error: false,
      errorMsg: null,
      groupMemberList: [{id: 1, name: 'Self'}, {id: 2, name: 'Manish'}, {id: 3, name: 'Surit'}],
      categoriesList: [] // Shape: [categoryString]
    }
  },
  async mounted () {
    await this.populateGroups();
  },
  watch: {
    groupSelection: {
      handler: function (newGroupSelection) {
        console.log('newGroupSelection: ', newGroupSelection);
        this.populateCategories();
        this.populateGroupMembers();
      }
    }
  },
  methods: {
    async saveEntry() {
      this.validateExpense();
      secure.saveEntry(this.form)
        .then((res) => {
          this.message = `New post saved: `, res;
          this.$router.push('/home');
        })
        .catch((err) => {
          console.log('Error saving new post: ', err);
          this.error = true;
          this.errorMsg = err.response.data;
        });
    },
    async populateGroups () {
      const groupsArr = await secure.getGroups();
      this.groups = groupsArr.data.data;
    },
    async populateCategories () {
      const categoriesArr = await secure.getCategories(this.groupSelection);
      this.categoriesList = categoriesArr.data.data;
    },
    async populateGroupMembers () {
      const groupMemebersArr = await secure.getGroupMemebers(this.groupSelection);
      this.groupMemberList = groupMemebersArr.data.data;
      console.log(groupMemebersArr)
    },
    validateExpense () {
      if(!this.form.category) this.form.category = 'Others';
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