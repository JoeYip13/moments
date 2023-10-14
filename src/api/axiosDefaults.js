import axios from "axios";

axios.defaults.baseURL = "https://drf-api-jy-ae86ff1e9b3e.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
