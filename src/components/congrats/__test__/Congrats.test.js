import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "../Congrats";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test('renders message congratulations when "success" prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");

  expect(message.text().length).not.toBe(0);
});

test('renders message not congratulations when "success" prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.text()).toBe("");
});
