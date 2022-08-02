<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"/>
    <div class="row">
      <VideoDetail :video="selectedVideo"/>
      <VideoList :videos="videos" @videoSelect="onVideoSelect" />
    </div>
  </div>
</template>

<script setup>
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'

import { search } from './api/search'
import { ref } from 'vue'

const videos = ref([]);
const selectedVideo = ref(null);

const onTermChange = async(searchTerm) => {
  videos.value = await search(searchTerm);
}

const onVideoSelect = (video) => {
  selectedVideo.value = video;
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
