<template>
  <v-card>
    <v-snackbar 
    :timeout="timeout" 
    :bottom="y === 'bottom'" 
    :multi-line="mode === 'multi-line'" 
    :vertical="mode === 'vertical'" 
    v-model="snackbar">
      <slot></slot>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
    data () {
        return {
            snackbar: false,
            y: 'top',
            x: null,
            timeout: 1000,
            mode: ''
        };
    },
    async created (){
        this.snackbar = true;
    }
}
</script>
