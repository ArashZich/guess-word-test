import PropTypes from "prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { middleWares } from "../configureStore";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleWares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

const checkProps = (component, templateProps) => {
  const propError = PropTypes.checkPropTypes(
    component.propTypes,
    templateProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};

export { findByTestAttr, checkProps };
