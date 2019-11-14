import React from "react";

import { configure, shallow } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";
import NavigationItems from "./NgnItems";
import NavigationItem from "./NavigationItem/NgnItem";

configure({ adapter: new Adaptor() });

describe("<NgnItems />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render two <NgnItem /> elements if not authenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render three <NgnItem /> elements if authenticated", () => {
    // wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it("should render logout if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    // wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
