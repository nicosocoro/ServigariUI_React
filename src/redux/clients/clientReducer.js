import { CLIENT_FETCH_SUCCESS } from './clientTypes'

const initialState = {
    data: [],
    error: '',
};

const getClient = state => state.client;

export { getClient };

export default (state = initialState, action) => {
    switch(action.type) {
        
        //get clients correctly
        case CLIENT_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
            };

        default:
            return state;
    }
};