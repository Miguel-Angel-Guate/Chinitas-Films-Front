import store from '../store';
import axios from 'axios';

export const character = async (value) => {
    const res = await axios.get(`https://unogsng.p.rapidapi.com/countries`);
    store.dispatch({
        type: 'CHARACTER',
        payload: res.data
    })
    return res;
}