import PropTypes from "prop-types";

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
