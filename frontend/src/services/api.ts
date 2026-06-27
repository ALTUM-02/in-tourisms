import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://tourism-dashboard.com', // Replace with your actual API endpoint
  headers: {