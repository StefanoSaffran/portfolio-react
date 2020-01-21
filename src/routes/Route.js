import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from '~/components/Header';

const RouteWrapper = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Header />
          <Component {...props} />
        </>
      )}
    />
  );
};

RouteWrapper.defaultProps = {
  component: undefined,
};

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default RouteWrapper;
