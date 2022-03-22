import axios from "axios"; 
 
require('dotenv').config()
 
let baseURL = "";

if (process.env.NODE_ENV === "development") { 
  baseURL = "https://api.github.com/users/Cyber-Quest/repos/"
} else {  
  baseURL = process.env.REACT_APP_API_URL
}
 
const Api = axios.create({
  baseURL,
  headers: { "content-type": "application/json" },
});
 

export default Api; 
