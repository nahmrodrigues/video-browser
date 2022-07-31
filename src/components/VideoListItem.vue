<template>
  <li class="list-group-item media" @click="onVideoSelect">
    <img :src="thumbnailUrl" class="mr-3"  />
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  emits: ['videoSelect'],
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video);
    }
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  }
};
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