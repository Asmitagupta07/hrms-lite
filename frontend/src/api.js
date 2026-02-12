import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-lite-backend-qmue.onrender.com/api/"

});

export default API;
