// generics
import React, { useReducer } from 'react'
import { connect } from 'react-redux';
import { compose } from 'recompose';

// material ui
import Button from '@material-ui/core/Button';

// own
import { getAllClient } from '../../redux/clients/clientAction'
import clientReducer from '../../redux/clients/clientReducer'

const ClientDetail = () => {
    const [clients, dispatch] = useReducer(clientReducer, []);

    console.log('primero');
    // dispatch(getAllClient());
    console.log('segundo');
    
    // function getAllClients() {
    //     getAllClients();
    // };
    // this.props.getAllClient();

    return(
        <div style={{'color': 'red'}}>
            <h1>Hola, soy clientes</h1>
            <Button 
                variant="contained"
                onClick={() => {
                    dispatch(getAllClient())
                }} >
                Testing
            </Button>
        </div>
    );
};

// const mapDispatchToProps = dispatch => ({
//     getAllClient: () => dispatch(getAllClient()),
// });

// export default compose(
//     connect(null, mapDispatchToProps)
// )(ClientDetail);

export default ClientDetail;