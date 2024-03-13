import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

test("mu-div가 있다.", () => {
  render(<MyPage />);
  const inputEl = screen.getByTestId("my-div");
  expect(inputEl).toBeInTheDocument();
});
