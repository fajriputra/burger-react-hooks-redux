import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import httpErrorHandler from "../../hooks/http-error-handler";

function withErrorHandler(WrappedComponent, axios) {
  return (props) => {
    const [error, clearError] = httpErrorHandler(axios);
    return (
      <React.Fragment>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
}

export default withErrorHandler;
