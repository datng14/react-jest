import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Provider store={createStore(reducers, {})}>
      <CommentBox />
    </Provider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("button").length).toEqual(1);
  expect(wrapped.find("textarea").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    // change event: event.target.value
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted, textarea gets emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    // expect(wrapped.state().comment).toEqual("");
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
