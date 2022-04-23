import axios from "axios";
// it will make request to the base url
/**base url to make requests to the movie database */
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
// making a get request to the url 
instance.get('/foo-bar');
export default instance;
