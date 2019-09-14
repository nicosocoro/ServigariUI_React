import { url_servigari_python as url } from '../../utils/API';
import { CLIENT_FETCH_SUCCESS } from './clientTypes'

const fetchSuccess = clients => ({
    type: CLIENT_FETCH_SUCCESS,
    payload: clients,
});

export const getAllClient = () => async (dispatch) => {
    console.log('entro');
    fetch(`${url}/Clients`)
    .then(res => res.json())
    .then((data) => {
        dispatch(fetchSuccess(data))
    })
    .catch(console.log)
}