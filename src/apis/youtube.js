import axios from 'axios';

const KEY = 'AIzaSyDQXs90f3SEeSgmvoV9bnKbxJUEKkRJWQ0';

// youtube.get will use this baseURL
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
