import { render, screen } from "@testing-library/react";
import App from "./App";

test("로고 이미지가 잘 나온다.", () => {
  render(<App />);
  const logoEl = screen.getByAltText("logo");
  expect(logoEl).toBeInTheDocument();
});
