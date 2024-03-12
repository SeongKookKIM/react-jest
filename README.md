# React 에서 jest 테스트 코드 사용하기

### vite react일 경우 jest 설치

`설치`

```js
npm i -D jest ts-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @babel/preset-react @babel/preset-typescript @babel/preset-env identity-obj-proxy

- jest : 테스트 프레임워크
- ts-jest : Jest에서 Typescript를 사용할 수 있게 해주는 도구
- @testing-library/react : React DOM 테스팅 유틸리티
- @testing-library/jest-dom : DOM 상태 테스트용 도구
- @testing-library/user-event : 사용자처럼 이벤트 발생시키는 도구
- identity-obj-proxy : import한 CSS 모듈 등을 mock 데이터로 사용할 수 있게 해주는 도구

***package.json
"scripts": {
  "test": "jest"
},

***jest.config.json
{
    "roots": ["<rootDir>/test/"],
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
        "\\.(css|less|svg)$": "identity-obj-proxy"
    },
    "setupFilesAfterEnv": ["<rootDir>/test/setup.ts"],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    }
}
- 테스트 환경은 jsdom으로 변경하고, css와 svg 파일은 identity-obj-proxy가 처리
마지막으로 ts, tsx 파일은 ts-jest가 처리하도록 설정

***babel.config.json
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ]
}

***test/setup.ts (test 폴더 내부에 넣어주기)
// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/jest-dom";
-jest.config.json에서 setupFilesAfterEnv에 들어있던 파일입니다.
상술한 것처럼 DOM 상태를 테스트하려면 jest-dom이 반드시 필요하니, import 하기 위한 파일을 따로 만들어줬습니다.
혹시 eslint를 사용 중이시라면 설정에 따라 개발 의존성에 추가된 파일 import 하지 말라고 잔소리할 겁니다.
어차피 test는 개발 과정에서만 진행할 거니 조용히 하라고 각주를 추가해줍니다.

***test/App.test.tsx
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("Renders main element", () => {
    render(<App />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
});
- 간단하게 main 엘리먼트가 있는지 확인하는 테스트 코드를 작성.

***Reference
[Adding Jest with TypeScript Support to a Vite Application](Adding Jest with TypeScript Support to a Vite Application)
```

## yarn cra jest 사용법

-cra는 jest가 자동 설치

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
