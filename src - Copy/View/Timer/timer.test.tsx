import React from "react";
import { shallow } from "enzyme";
import Timer from "./index";

describe("App", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Timer />)));

  it("should render a <div />", () => {
    expect(container.find(".timeBox").length).toEqual(1);
  });
  it("should render a <div />", () => {
      console.log(container.debug())
    expect(container.find(".timeBox").text()).toEqual(0 + ":" + 0 + ":" + 0);
  });

});
