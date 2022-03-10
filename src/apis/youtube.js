import axios from "axios";

const KEY = 'AIzaSyDQ5EQoKviD48upKy20QW4dH6k-MVz3piY'; 

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
