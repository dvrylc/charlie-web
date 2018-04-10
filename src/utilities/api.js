// External imports
import axios from 'axios';

const key = Buffer.from('JDJhJDEwJGkxaHR0STZUSWZVMXptcDZuQ3FaUnVYalFzYlQ1VmRscW1aZTRlczV2MU44VFhubWxRYXFL', 'base64').toString('ascii');

const instance = axios.create({
  baseURL: 'https://api.jsonbin.io/b/5acc18df34fe482b8aca7f66',
  headers: {
    'secret-key': key
  }
});

const api = {
  fetch: () => {
    return instance.get('/latest');
  },
  update: data => {
    return instance.put('/', {
      data: data
    });
  }
}

export default api;
