import store from '../store';
import axios from 'axios';

export const populars = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=1');
    store.dispatch({
        type: 'POPULARS',
        payload: res.data
        
        
    })
  
    return res;
}