  
import axios from "axios";
import moment from 'moment'
import {store} from 'store'

require('dotenv').config()


let baseURL = "";

if (process.env.NODE_ENV === "development") { 
  baseURL = "https://api.cyber-portfolio.com/v1/"
} else {  
  baseURL = process.env.REACT_APP_API_URL
}

const Api = axios.create({
  baseURL,
  headers: { "content-type": "application/json" },
});
 
export default Api;