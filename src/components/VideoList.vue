<template>
  <ul class="list-group col-md-4">
    <VideoListItem 
      v-for="video in videos" 
      :key="video.etag"
      :video="video"
      @videoSelect="onVideoSelect"
    />
  </ul> 
</template>

<script setup>
import VideoListItem from './VideoListItem.vue'

defineProps(['videos']);

const emit = defineEmits(['videoSelect']);

const onVideoSelect = (video) => {
  emit('videoSelect', video)
}
</script>

<style>
</style>