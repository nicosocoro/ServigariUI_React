// generals
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// specifics
import clientReducer from './clients/clientReducer'

export default combineReducers({
    from: formReducer,
    client: clientReducer,
});