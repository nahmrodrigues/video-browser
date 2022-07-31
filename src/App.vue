<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"/>
    <div class="row">
      <VideoDetail :video="selectedVideo"/>
      <VideoList :videos="videos" @videoSelect="onVideoSelect" />
    </div>
  </div>
</template>

<script>

import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'

import { search } from './api/search'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
},
  data() {
    return {
      videos: [],
      selectedVideo: null
    };
  },
  methods: {
    async onTermChange(searchTerm) {
      this.videos = await search(searchTerm);
    },

    onVideoSelect(video) {
      this.selectedVideo = video
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
