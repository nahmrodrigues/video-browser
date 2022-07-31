<template>
  <form @submit.prevent="onSubmit">
    <input class="form-control col-8"/>
    <input type="submit" value="search" class="btn btn-primary"/>
  </form> 
</template>

<script>

export default {
  name: 'SearchBar',
  emits: ['termChange'],
  methods: {
    onSubmit(event) {
      this.$emit('termChange', event.target.value);
    }
  }
};
</script>

<style scoped>
  input {
    width: 75%;
  }

  form { 
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>