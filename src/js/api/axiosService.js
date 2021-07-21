import axios from 'axios';

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.Accept = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? "http://127.0.0.1:8000/api/posts"
    : // 'https://api.drivesmatrix.assetmatrix.com/api'
    "http://127.0.0.1:8000/api/posts";

export default axios
