<template>
  <form @submit.prevent="onSubmit">
    <input class="form-control col-8"/>
    <input type="submit" value="search" class="btn btn-primary"/>
  </form> 
</template>

<script setup>
const emit = defineEmits(['termChange'])

const onSubmit = (e) => {
  emit('termChange', e.target.value);
}
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