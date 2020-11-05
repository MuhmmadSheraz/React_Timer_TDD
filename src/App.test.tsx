import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Timer from "./View/Timer";
import Button from "./Components/Buttons";
describe("App", () => {
  let container: any;

  beforeEach(() => (container = shallow(<App />)));

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(6);
  });
  it("Should render h1 Tag ", () => {
    expect(container.find("h1").text()).toContain("React Timer App");
  });

  it("should render the Timer Component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  });
  it("should render three <Button />", () => {
    // console.log(container.debug());
    expect(container.find("Buttons").length).toEqual(3);
  });
  it("should render  <Button /> div", () => {
    expect(container.find(".allButtons").length).toEqual(1);
  });
});
