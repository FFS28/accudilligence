import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      position: 'static'
    },
}));

function ClientInvoices(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Invoices
        </div>
    );
}

ClientInvoices.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ClientInvoices;