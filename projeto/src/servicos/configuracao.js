import axios from "axios";

export const http = axios.create({
  baseUrl: 'http://vue-notes-api.azurewebsites.net/',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});
