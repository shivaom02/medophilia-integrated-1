<<<<<<< HEAD
import axios from 'axios';

const Instance = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:5000`
});

=======
import axios from 'axios';

const Instance = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:5000`
});

>>>>>>> 9164b1055f0d7bbbd3f29d2613539877b5d82982
export default Instance;