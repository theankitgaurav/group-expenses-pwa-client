<template>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <form novalidate @submit.prevent="saveEntry">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-33">
              <md-field>
                <md-icon>group</md-icon>
                <label>Group</label>
                <md-select v-model="expenseGroup" name="group" id="group"
                    v-model.lazy="expenseGroup">
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
                <md-select v-model="expenseBy" name="paidBy" id="paidBy">
                  <md-option v-for="paidBy in groupMemberList" :key="paidBy.id" :value="paidBy.id">{{paidBy.name}}</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-size-33">
              <md-field>
                <md-icon>date_range</md-icon>
                <label>Paid On</label>
                <md-input v-model="expenseOn" type="date" aria-placeholder="" placeholder="" />
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Details</label>
                <md-textarea v-model="expenseDetails"></md-textarea>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-33">
              <md-field>
                <label>Amount</label>
                <span class="md-prefix">₹</span>
                <md-input v-model="expenseAmount" type="number"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-33">
              <md-autocomplete v-model="expenseCategory" :md-options="categoriesList">
                <label>Category</label>
              </md-autocomplete>
            </div>
          </div>
      </form>
      <md-button @click="saveEntry" class="md-fab md-primary md-fab-bottom-right ">
        <md-icon>done</md-icon>
      </md-button>
    </md-card>
</template>

<script>
import {secure} from '@/api';
export default {
  data() {
    return {
      expenseCategory: null,
      expenseAmount: null,
      expenseBy: null,
      expenseOn: null,
      expenseGroup: null,
      expenseDetails: null,
      error: false,
      errorMsg: null,
      groups: [], // Shape: [{id,name}]
      groupMemberList: [], // Shape: [{id, name}]
      categoriesList: [] // Shape: [expenseCategoryString]
    }
  },
  async mounted () {
    await this.populateGroups();
  },
  watch: {
    expenseGroup: {
      handler: function (newexpenseGroup) {
        console.log('newexpenseGroup: ', newexpenseGroup);
        this.populateCategories();
        this.populateGroupMembers();
      }
    }
  },
  methods: {
    async saveEntry() {
      const form = {
        expenseCategory: this.expenseCategory,
        expenseAmount: this.expenseAmount,
        expenseBy: this.expenseBy,
        expenseOn: this.expenseOn,
        expenseGroup: this.expenseGroup,
        expenseDetails: this.expenseDetails,
      };

      try {
        const res = await secure.saveEntry(form);
        // this.$store.dispatch('showSuccess', "New expense added");
        throw new Error('Hehehe');
      } catch (err) {
        this.$store.dispatch('showError', err);
      } finally {
        // this.$router.push('/home');
      }
    },
    async populateGroups () {
      const groupsArr = await secure.getGroups();
      this.groups = groupsArr.data.data;
    },
    async populateCategories () {
      const categoriesArr = await secure.getCategories(this.expenseGroup);
      this.categoriesList = categoriesArr.data.data;
    },
    async populateGroupMembers () {
      const groupMemebersArr = await secure.getGroupMemebers(this.expenseGroup);
      this.groupMemberList = groupMemebersArr.data.data;
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