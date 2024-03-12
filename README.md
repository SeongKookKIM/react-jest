### React 에서 jest 테스트 코드 사용하기

`yarn react사용`

```js
//Hello.js
import React from "react";

function Hello({ user }) {
  return user && user.name ? (
    <h1>Hello!{user.name}</h1>
  ) : (
    <button>Login</button>
  );
}

export default Hello;

//Hello.test.js
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Tom",
  age: 30,
};

const user2 = {
  age: 20,
};

test("snapshot: name 있음", () => {
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
});
test("snapshot: name 없음", () => {
  const el = render(<Hello />);
  expect(el).toMatchSnapshot();
});

test("Hello 라는 글자가 포함되는가?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});
->snap샷 생성 후 디버깅 및 오류 확인

***`변하는 시간값 테스트`
//Timer.js
function Timer() {
  const now = Date.now();
  const sec = new Date(now).getSeconds();
  return <p>현재 {sec}초 입니다.</p>;
}

export default Timer;

//Time.test.js
import { render, screen } from "@testing-library/react";
import Timer from "./Timer";

test("초 표시", () => {
  Date.now = jest.fn(() => 123456789);
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
->mock함수를 사용, 시간을 고정해서 오류를 방지

```
