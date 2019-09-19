import axios from 'axios';

const KEY = 'AIzaSyCCK9T_C2hCH2Xd_MXKkRy8sl7-jXkHr3E';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults : 5,
        key: KEY
    }
});