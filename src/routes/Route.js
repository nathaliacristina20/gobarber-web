import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
    // eslint-disable-next-line react/prop-types
    component: Component,
    // eslint-disable-next-line react/prop-types
    isPrivate,
    ...rest
}) {
    const signed = false;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />;
    }

    return <Route {...rest} component={Component} />;
}

// eslint-disable-next-line react/no-typos
RouteWrapper.PropTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
