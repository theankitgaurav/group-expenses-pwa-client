<template>
  <div>
    <!-- <EntryList/> -->
    <md-empty-state 
    md-rounded md-icon="group_add" 
    md-label="No groups yet" 
    md-description="Create a group for adding shared expenses">
      <md-button class="md-primary md-raised" @click="addGroup">Create first group</md-button>
    </md-empty-state>
    <!-- <md-button @click="addGroup" class="md-fab md-primary md-fab-bottom-right ">
      <md-icon>group_add</md-icon>
    </md-button> -->
  </div>
</template>


<script>
  import EntryList from '@/components/EntryList.vue';
  export default {
    components: {
      EntryList
    },
    methods: {
      addGroup() {
        this.$router.push("/new-entry");
      }
    }
  };

</script>

<style scoped>
</style>
