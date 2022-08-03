import axios from 'axios';

export async function search(searchTerm) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: process.env.VUE_APP_API_KEY,
        type: 'video',
        part: 'snippet',
        q: searchTerm
      }
    });

    return response.data.items;
}