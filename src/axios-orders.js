import axios from 'axios'
const instance=axios.create({
	baseURL:'https://burger-f1b9f.firebaseio.com/'

});
export default instance