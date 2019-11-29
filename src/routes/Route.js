import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';
import { store } from '~/store';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const { signed } = store.getState().auth;

    if (!signed && isPrivate) {
        console.tron.log('caiu aqui 1');
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        console.tron.log('caiu aqui 2');
        return <Redirect to="/dashboard" />;
    }

    const Layout = signed ? DefaultLayout : AuthLayout;

    console.tron.log('signed ', signed);

    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
