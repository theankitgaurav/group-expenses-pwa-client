<template>
  <md-list-item @click="$emit('open', expense.id)" >
    <md-icon class="md-primary">attach_money</md-icon>
    <div class="md-list-item-text">
      <span>₹ {{expense.amount}} for {{expense.category}}</span>
      <span>Paid by {{expense.paidBy}} in {{expense.groupName}}</span>
    </div>
  </md-list-item>
</template>

<script>
export default {
    props: {
        expense: {type: Object, required: true}
    }
}
</script>
