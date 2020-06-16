import { shallow } from "enzyme";
import React from "react";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);

  // expect(div.innerHTML).toContain("CommentBox");
  // ReactDOM.unmountComponentAtNode(div);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});