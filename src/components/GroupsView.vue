<template>
  <div>
    <md-content v-if="this.$store.state.groupsList.length > 0">
      <md-list class="md-double-line" v-for="group in groups" :key="group.id">
        <GroupListItem :group="group" @open="openGroup"/>
      </md-list>
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
import GroupListItem from './GroupListItem.vue'
export default {
  components: {GroupListItem},
  methods: {
    addGroup() {
      this.$router.push("/new-entry");
    }
  },
  computed: {
    expenses () {
      return this.$store.state.groupsList;
    }
  }
};

</script>

<style scoped>
</style>
