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

<script>

import VideoListItem from './VideoListItem.vue'

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  props: ['videos'],
  emits: ['videoSelect'],
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelect', video)
    }
  }
};
</script>

<style>
</style>