# React 에서 jest 테스트 코드 사용하기 [jest-dom](https://github.com/testing-library/jest-dom?tab=readme-ov-file)

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
[Adding Jest with TypeScript Support to a Vite Application](`https://egghead.io/lessons/jest-adding-jest-with-typescript-support-to-a-vite-application`)
```

## yarn cra jest 사용법

-cra는 jest가 자동 설치

## `Mathcher함수 모음`

---

- Custom matchers
  - `toBeDisabled`: 대상 요소가 비활성화(disabled)되었는지 확인합니다.
  - `toBeEnabled`: 대상 요소가 활성화(enabled)되었는지 확인합니다.
  - `toBeEmptyDOMElement`: 대상 요소가 비어 있는지 확인합니다.
  - `toBeInTheDocument`: 대상 요소가 DOM에 존재하는지 확인합니다.
  - `toBeInvalid`: 대상 요소가 유효하지 않은 상태인지 확인합니다.
  - `toBeRequired`: 대상 요소가 필수(required)인지 확인합니다.
  - `toBeValid`: 대상 요소가 유효한 상태인지 확인합니다.
  - `toBeVisible`: 대상 요소가 시각적으로 보이는지 확인합니다.
  - `toContainElement`: 대상 요소 안에 특정 요소가 포함되어 있는지 확인합니다.
  - `toContainHTML`: 대상 요소의 HTML 내용에 특정 문자열이 포함되어 있는지 확인합니다.
  - `toHaveAccessibleDescription`: 대상 요소가 비활성화(disabled)되었는지 확인합니다.
  - `toBeDisabled`: 대상 요소가 접근성 설명(accessible description)을 가지고 있는지 확인합니다.
  - `toHaveAccessibleErrorMessage`: 대상 요소의 접근성 오류 메시지가 기대한 값을 가지고 있는지 확인합니다.
  - `toHaveAccessibleName`: 대상 요소가 접근성 이름(accessible name)을 가지고 있는지 확인합니다.
  - `toHaveAttribute`: 대상 요소가 특정 속성을 가지고 있는지 확인합니다.
  - `toHaveClass`: 대상 요소가 특정 클래스를 가지고 있는지 확인합니다.
  - `toHaveFocus`: 대상 요소가 포커스를 가지고 있는지 확인합니다.
  - `toHaveFormValues`: 대상 요소가 특정 폼 값들을 가지고 있는지 확인합니다.
  - `toHaveStyle`: 대상 요소가 특정 스타일 속성을 가지고 있는지 확인합니다.
  - `toHaveTextContent`: 대상 요소의 텍스트 내용이 기대한 값을 가지고 있는지 확인합니다.
  - `toHaveValue`: 대상 요소의 값이 기대한 값을 가지고 있는지 확인합니다.
  - `toHaveDisplayValue`: 대상 요소의 표시 값이 기대한 값을 가지고 있는지 확인합니다.
  - `toBeChecked`: 대상 체크박스나 라디오 버튼이 선택된 상태인지 확인합니다.
  - `toBePartiallyChecked`: 대상 체크박스가 부분적으로 선택된 상태인지 확인합니다.
  - `toHaveRole`: 대상 요소가 특정 역할(role)을 가지고 있는지 확인합니다.
  - `toHaveErrorMessage`: 대상 요소의 오류 메시지가 기대한 값을 가지고 있는지 확인합니다.

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

`예시1`

```js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("로고 이미지가 잘 나온다.", () => {
  render(<App />);
  const logoEl = screen.getByAltText("logo");
  expect(logoEl).toBeInTheDocument();
});
-> 이미지 확인 법
```

`예시2`

```js
// MyPage.js
import React from "react";

function MyPage({ user }) {
  return (
    <div>
      {user && user.name ? (
        <h1>{user.name}님 환영합니다.</h1>
      ) : (
        <h1>
          로그인을 해주세요.<button>로그인</button>
        </h1>
      )}
    </div>
  );
}

export default MyPage;

//MyPage.test.js
import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage />);
  const txtEl = screen.getByText(/로그인을 해주세요/);
  const btnEl = screen.getByRole("button");
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});

test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage user={{ name: "kim" }} />);
  const txtEl = screen.getByText(/kim님 환영합니다/);
  expect(txtEl).toBeInTheDocument();
});
test("유저가 name이 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage user="Park" />);
  const txtEl = screen.getByText(/로그인을 해주세요/);
  const btnEl = screen.getByRole("button");
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});
-> getByText('로그인을 해주세요.') 텍스트로 변환시 정확히 사용해야함 `/로그인/` 정규식 사용시 문제 없음
->getByRole() `h1~h6: heading``button:button``a:link``checkbox:checkbox``radio:radio``select:combobox`
```

`예시3`

```js
//JoinButton.js
import React from "react";

function JoinButton({ age }) {
  return (
    <>
      <button disabled={age < 19}>가입</button>
      {age < 19 ? (
        <h3 style={{ color: "red" }}>성인만 가입할 수 있습니다.</h3>
      ) : (
        <h3 style={{ color: "blue" }}>가입할 수 있습니다.</h3>
      )}
    </>
  );
}

export default JoinButton;

//JoinButton.test.js
import { render, screen } from "@testing-library/react";
import JoinButton from "./JoinButton";

test("19세 이하면 버튼을 클릭할 수 없다. 안내문구는 빨강색이다.", () => {
  render(<JoinButton age={10} />);
  const btnEl = screen.getByRole("button");
  const txtEl = screen.getByRole("heading");
  expect(btnEl).toBeInTheDocument();
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeDisabled();
  expect(txtEl).toHaveStyle({
    color: "red",
  });
});

test("성인은 클릭할 수 있다. 안내문구는 파란색이다.", () => {
  render(<JoinButton age={20} />);
  const btnEl = screen.getByRole("button");
  const txtEl = screen.getByRole("heading");
  expect(btnEl).toBeInTheDocument();
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeEnabled();
  expect(txtEl).toHaveStyle({
    color: "blue",
  });
});
->Style까지 확인
```

#### 요소를 찾는 쿼리

```js
//MyPage.js
import React from "react";

function MyPage({ user }) {
  return (
    <div>
      <h1>hello</h1>
      <h2>world</h2>
    </div>
  );
}
...

//MyPage.test.js
import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

test("제목 확인", () => {
  render(<MyPage />);
  const titleEl = screen.getByRole("heading", { level: 1 });
  expect(titleEl).toBeInTheDocument();
});
-> `heading`이 중복 될 경우 오류 {level}사용하여 찾기

and

function MyPage({ user }) {
  return (
    <div>
      <div>
        <label htmlFor="usename">이름</label>
        <input type="text" id="usename" />
      </div>
      <div>
        <label htmlFor="profile">자기소개</label>
        <textarea type="text" id="profile" />
      </div>
    </div>
  );
}

test("input 요소가 있다.", () => {
  render(<MyPage />);
  const inputEl = screen.getByRole("textbox");
  expect(inputEl).toBeInTheDocument();
});
-> textbox가 여러개 있다는 오류가 남 (input[text]와 textarea)
해결:
test("input 요소가 있다.", () => {
  render(<MyPage />);
  const inputEl = screen.getByRole("textbox", {
    name: "자기소개",
  });
  expect(inputEl).toBeInTheDocument();
});
-> name을 주어 textbox를 찾음, <label htmlFor="profile">자기소개</label><textarea type="text" id="profile123" /> id와 for이 다를경우 오류

또는

test("input 요소가 있다.", () => {
  render(<MyPage />);
  const inputEl = screen.getByLabelText("자기소개");
  expect(inputEl).toBeInTheDocument();
});
-> getByLabelText를 사용하여 찾기(label를 찾는게 아닌 연결된 textbox를 찾는거임)

and

function MyPage({ user }) {
  return (
    <div>
      <div>
        <label htmlFor="usename">자기소개</label>
        <input type="text" id="usename" />
      </div>
      <div>
        <label htmlFor="profile">자기소개</label>
        <textarea type="text" id="profile" />
      </div>
    </div>
  );
}-> label의 이름이 똑같은 경우

const inputEl = screen.getByLabelText("자기소개", {
    selector: "textarea",
}); -> slector로 찾을 수 있음

and

<input type="text" id="usename" value="Tom" readOnly />
-> value값이 있을 경우

test("input 요소가 있다.", () => {
  render(<MyPage />);
  const inputEl = screen.getByDisplayValue("Tom");
  expect(inputEl).toBeInTheDocument();
});
->getByDisplayValue를 사용하여 찾을 수 있음

and

<div data-testid="my-div" />
-> 요소를 찾을 수 없을 시 `data-testid="my-div"` 삽입

test("mu-div가 있다.", () => {
  render(<MyPage />);
  const inputEl = screen.getByTestId("my-div");
  expect(inputEl).toBeInTheDocument();
});
-> `getByTestId`로 접근 가능
```

#### 전체요소를 찾는 쿼리

```js
// UsetList.js
import React, { useEffect, useState } from "react";

export default function UserList({ users }) {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 1500);
  }, []);

  return (
    <>
      {showTitle && <h1>사용자 목록</h1>}
      <ul>
        {users.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </>
  );
} -> 1.5초후 h1이 보임

//UsetList.test.js

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];

  test("ul이 있다.", () => {
    render(<UserList users={users} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });
  -> getByRole을 사용하여 요소 찾기

  test("li는 3개가 나옵니까?", () => {
    render(<UserList users={[]} />);
    // const liElement = screen.getAllByRole("listitem");
    const liElement = screen.queryAllByRole("listitem");

    expect(liElement).toHaveLength(0);
    // expect(liElement).not.toBeInTheDocument();
  });
  ->getAllByRole 모든 요소 찾기(찾는 요소가 없을 시 오류)
  ->queryAllByRole 모든요소 찾기(찾는 요소가 없을 경우 null,undefiled[] 빈 배열을 배출)

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
  ->findByRole 모든요소 찾기 (없을 경우 오류 getAllByRole와 일치)
  ->`promise를 반환` defaultTime 은 1000ms
  ->screen.debug() 사용시
screen.debug() 예시:
      <body>
        <div>
          <ul>
            <li>
              Tom
            </li>
            <li>
              Jane
            </li>
            <li>
              Mike
            </li>
          </ul>
        </div>
      </body>

      and

      <body>
        <div>
          <h1>
          사용자 제목
          </h1>
          <ul>
            <li>
              Tom
            </li>
            <li>
              Jane
            </li>
            <li>
              Mike
            </li>
          </ul>
        </div>
      </body>
이렇게 확인하여 볼 수 있음
});
```

### 유저 이벤트 테스트

- "@testing-library/user-event": "^13.2.1" 공식문에 따르면 13버전은 이제 지원하지않음
- npm install @testing-library/user-event 14버전으로
  [공식문서 링크](https://testing-library.com/docs/user-event/intro/)

```js
//Login.js
import React, { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  const handleOnClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <button type="button" onClick={handleOnClick}>
      {isLogin ? "Logout" : "Login"}
    </button>
  );
} -> 토글 버튼 클릭시 test가 변경

//Login.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
->`import` 해주어야함

import Login from "./Login";

describe("Login Test", () => {
  test("처음에 Login버튼이 있다.", () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    expect(btnEl).toHaveTextContent("Login");
  });-> 처음랜더 시 텍스트가 Login인지 확인

  const user = userEvent.setup();
  ->`@testing-library/user-event`셋팅

  test("클릭시 Logout이 된다.", async () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    await user.click(btnEl); //promise를 반환
    expect(btnEl).toHaveTextContent("Logout");
  });
  ->`userEvent`는 `promise`를 반환한다.
  ->클릭 시 텍스트가 Logout으로 변환되는지 확인

  test("tab, space, enter 키보드 동작", async () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    await user.tab(); //promise를 반환
    await user.keyboard(" "); //promise를 반환
    await user.keyboard(" "); //promise를 반환
    await user.keyboard("{Enter}"); //promise를 반환
    expect(btnEl).toHaveTextContent("Logout");
  });
  ->키보드 이벤트 확인(spacebar는 ` ` 띄어스기를 한 번 해야함.)
});
```
