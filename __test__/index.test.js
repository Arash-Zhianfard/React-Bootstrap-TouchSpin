import React from "react";
import ReactDOM from "react-dom";
import TouchSpin from "../src/TouchSpin"

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TouchSpin />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App loads with initial state of 0", () => {
  const wrapper = shallow(<TouchSpin />);
  const text = wrapper.find("input").text();
  expect(text).toEqual("0");
});
