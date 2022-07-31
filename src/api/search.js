import axios from 'axios';

const API_KEY = 'AIzaSyC91PSj-Cs8Vw62lMiGTRNkPXmXT12ceo0';

export async function search(searchTerm) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: API_KEY,
        type: 'video',
        part: 'snippet',
        q: searchTerm
      }
    });

    return response.data.items;
}