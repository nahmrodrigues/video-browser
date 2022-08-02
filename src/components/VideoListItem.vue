<template>
  <li class="list-group-item media" @click="onVideoSelect">
    <img :src="thumbnailUrl" class="mr-3"  />
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['video'])
const emit = defineEmits(['videoSelect'])
const thumbnailUrl = computed(() => props.video.snippet.thumbnails.default.url);

const onVideoSelect = () => {
  emit('videoSelect', props.video)
}
</script>

<style scoped>
  li { 
    display: flex;
    cursor: pointer;
  }

  li:hover {
    background-color: #eee;
  }

  div { 
    margin: 0 20px;
  }
</style>