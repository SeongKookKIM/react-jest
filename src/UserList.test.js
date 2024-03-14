import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];

  test("ul이 있다.", () => {
    render(<UserList users={users} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  test("li는 3개가 나옵니까?", () => {
    render(<UserList users={[]} />);
    // const liElement = screen.getAllByRole("listitem");
    const liElement = screen.queryAllByRole("listitem");

    expect(liElement).toHaveLength(0);
    // expect(liElement).not.toBeInTheDocument();
  });

  test("잠시 후 제목이 나타납니다.", async () => {
    render(<UserList users={users} />);
    // const titleEl = screen.getByRole("heading", { name: "사용자 목록" });
    // expect(titleEl).toBeInTheDocument(); ->실패
    // screen.debug();
    const titleEl = await screen.findByRole(
      "heading",
      { name: "사용자 목록" },
      { timeout: 2000 }
    );
    // screen.debug();
    expect(titleEl).toBeInTheDocument();
  });
  //   default타임 1초
});
