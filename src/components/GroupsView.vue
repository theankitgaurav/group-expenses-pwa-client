<template>
  <div>
    <md-content v-if="this.$store.state.groupsList.length > 0">
      <!-- <GroupList/> -->
      <md-button @click="addGroup" class="md-fab md-primary md-fab-bottom-right ">
        <md-icon>group_add</md-icon>
      </md-button>
    </md-content>
    <md-content v-else>
      <md-empty-state md-icon="group_add" md-label="No groups yet" md-description="Create a group for adding shared expenses">
        <md-button class="md-primary md-raised" @click="addGroup">Create first group</md-button>
      </md-empty-state>
    </md-content>
  </div>
</template>

<script>
export default {
  methods: {
    addGroup() {
      this.$router.push("/new-entry");
    }
  }
};

</script>

<style scoped>
</style>
