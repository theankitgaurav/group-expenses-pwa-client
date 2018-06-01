<template>
  <transition name="bounce">
    <form novalidate class="md-layout" @submit.prevent="saveEntry">
      <div class="row-1">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-75">
            <md-autocomplete v-model="expenseCategory" :md-options="categoryList">
              <label>Category</label>
            </md-autocomplete>
          </div>
          <div class="md-layout-item md-size-25">
            <md-field>
              <label>Amount</label>
              <span class="md-prefix">₹</span>
              <md-input v-model="expenseAmount" type="number"></md-input>
            </md-field>
          </div>
        </div>
      </div>
      <div class="row-2">
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
            <md-field>
              <label>Details</label>
              <md-textarea v-model="expenseDetails"></md-textarea>
            </md-field>
          </div>
        </div>
      </div>
      <div class="row-3">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-33">
            <md-field>
              <md-icon>perm_identity</md-icon>
              <label>Paid By</label>
              <md-input v-model="expenseBy" />
            </md-field>
          </div>
          <div class="md-layout-item md-size-33">
            <md-datepicker v-model="expenseOn" md-immediately :md-open-on-focus="false" md-clearable="false">
              <label>Paid On</label>
            </md-datepicker>
          </div>
          <div class="md-layout-item md-size-33">
            <md-field>
              <md-icon>group</md-icon>
              <label>Group</label>
              <md-input v-model="expenseGroup"></md-input>
            </md-field>
          </div>
        </div>
      </div>
    </form>
  </transition>
</template>


<script>
import Snackbar from '@/components/Snackbar.vue';
import entryService from '@/services/entryService';
export default {
  data() {
    return {
      expenseCategory: "",
      expenseAmount: "",
      expenseBy: "",
      expenseOn: new Date,
      expenseGroup: "",
      expenseDetails: "",
      message: null,
      groupMemberList: ['Manish', 'Surit', 'Ankit'],
      categoryList: ['Veggies', 'Flour', 'Rice', 'Stationary', 'Detergent']
    }
  },
  components: {
    Snackbar
  },
  methods: {
    async saveEntry() {
      const newPost = {
        category: this.category,
        amount: this.amount
      };
      entryService.saveEntry(newPost)
        .then((res) => {
          this.message = `New post saved: `, res;
          this.$router.push('/home');
        })
        .catch((err) => {
          console.log('Error saving new post: ', err);
          this.message = err.response.data;
        });
    }
  }
}


</script>

<style>
.error {
  color: red;
}
.bounce-enter-active {
  animation: bounce-in .05s;
}
.bounce-leave-active {
  animation: bounce-in .1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(.25);
  }
  50% {
    transform: scale(.5);
  }
  75% {
    transform: scale(.75);
  }
  100% {
    transform: scale(1);
  }
}
</style>
